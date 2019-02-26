# gatsby-remark-latex-blocks

Processes [LaTeX](https://www.latex-project.org/) code blocks in your
markdown files and replaces them with the rendered SVG. It leverages LaTeX and
[dvisvgm](https://dvisvgm.de/) behind the scenes and requires a working LaTeX
installation.

## Install

`npm install --save gatsby-transformer-remark gatsby-remark-latex-blocks`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        'gatsby-remark-latex-blocks'
      ]
    }
  }
],
```

Then, add `latex` code blocks to your markdown. E.g

    ```latex
    \documentclass[tikz, border=2pt]{standalone}
    \begin{document}
      \begin{tikzpicture}[scale=3]
      \draw[step=.5cm, gray, very thin](-1.2,-1.2) grid (1.2,1.2);
      \filldraw[fill=green!20,draw=green!50!black](0,0) -- (3mm,0mm) arc (0:30:3mm) -- cycle;
      \draw[->](-1.25,0) -- (1.25,0) coordinate (x axis);
      \draw[->](0,-1.25) -- (0,1.25) coordinate (y axis);
      \draw (0,0) circle (1cm);
      \draw[very thick,red](30:1cm) -- node[left,fill=white] {$\sin \alpha$} (30:1cm |- x axis);
      \draw[very thick,blue] (30:1cm |- x axis) -- node[below=2pt,fill=white] {$\cos \alpha$} (0,0);
      \draw (0,0) -- (30:1cm);
      \foreach \x/\xtext in {-1, -0.5/-\frac{1}{2}, 1}
        \draw (\x cm,1pt) -- (\x cm,-1pt) node[anchor=north,fill=white] {$\xtext$};
      \foreach \y/\ytext in {-1, -0.5/-\frac{1}{2}, 0.5/\frac{1}{2}, 1}
        \draw (1pt,\y cm) -- (-1pt,\y cm) node[anchor=east,fill=white] {$\ytext$};
      \end{tikzpicture}
    \end{document}
    ```

Which will be rendered using LaTeX and dvisvgm and the output html will replace
the code block with the actual SVG.

## Caveats

In your gatsby-config.js, make sure you place this plugin before other remark
plugins that modify code blocks (like prism).
