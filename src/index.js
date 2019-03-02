const visit = require(`unist-util-visit`);
const cheerio = require(`cheerio`);
const { latex2svg } = require(`./latex2svg`);

const validLanguages = [`latex`];

module.exports = async ({ markdownAST }, pluginOptions = {}) => {
  let latexNodes = [];

  visit(markdownAST, `code`, node => {
    for (lang of validLanguages) {
      if (node.lang && node.lang.startsWith(lang)) {
        const chunks = node.lang.match(/^(?<lang>\S+)(\s+(?<attrString>.+))?/);
        node.lang = chunks.groups.lang;
        latexNodes.push({ node, attrString: chunks.groups.attrString });
        break;
      }
    }
    return node;
  });

  await Promise.all(
    latexNodes.map(async ({ node, attrString }) => {
      const { value } = node;

      try {
        // Perform actual render
        const svgString = await latex2svg(value);

        // Add default inline styling
        const $ = cheerio.load(svgString);
        $(`svg`).attr(`style`, `max-width: 100%; height: auto;`);

        // Merge custom attributes if provided by user (adds and overwrites)
        if (attrString) {
          const attrElement = cheerio.load(`<element ${attrString}></element>`);
          $(`svg`).attr(attrElement(`element`).attr());
        }

        // Mutate the current node. Converting from a code block to
        // HTML (with svg content)
        node.type = `html`;
        node.value = $.html(`svg`);
      } catch (error) {
        console.log(
          `Error during latex execution. Leaving code block unchanged`
        );
        console.log(error);
      }

      return node;
    })
  );
};
