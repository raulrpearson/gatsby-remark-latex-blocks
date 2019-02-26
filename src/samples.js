module.exports = {
  house: String.raw`
    \documentclass[tikz, border=1pt]{standalone}
    \begin{document}
      \begin{tikzpicture}
      \draw[thick,rounded corners=3pt] (0,0) -- (0,2) -- (1,3.25) 
      -- (2,2) -- (2,0) -- (0,2) -- (2,2) -- (0,0) -- (2,0);
      \end{tikzpicture}
    \end{document}
  `,
  graph: String.raw`
    \documentclass[tikz, border=2pt]{standalone}
      \begin{document}
        \begin{tikzpicture}[scale=3]
        \draw[step=.5cm, gray, very thin] (-1.2,-1.2) grid (1.2,1.2);
        \filldraw[fill=green!20,draw=green!50!black] (0,0) -- (3mm,0mm) arc (0:30:3mm) -- cycle;
        \draw[->] (-1.25,0) -- (1.25,0) coordinate (x axis);
        \draw[->] (0,-1.25) -- (0,1.25) coordinate (y axis);
        \draw (0,0) circle (1cm);
        \draw[very thick,red] (30:1cm) -- node[left,fill=white] {$\sin \alpha$} (30:1cm |- x axis);
        \draw[very thick,blue] (30:1cm |- x axis) -- node[below=2pt,fill=white] {$\cos \alpha$} (0,0);
        \draw (0,0) -- (30:1cm);
        \foreach \x/\xtext in {-1, -0.5/-\frac{1}{2}, 1}
          \draw (\x cm,1pt) -- (\x cm,-1pt) node[anchor=north,fill=white] {$\xtext$};
        \foreach \y/\ytext in {-1, -0.5/-\frac{1}{2}, 0.5/\frac{1}{2}, 1}
          \draw (1pt,\y cm) -- (-1pt,\y cm) node[anchor=east,fill=white] {$\ytext$};
      \end{tikzpicture}
    \end{document}
  `,
  functions: String.raw`
  \documentclass[tikz, border=2pt]{standalone}
  \begin{document}
    \begin{tikzpicture}[domain=0:4] 
      \draw[very thin,color=gray] (-0.1,-1.1) grid (3.9,3.9);
      \draw[->] (-0.2,0) -- (4.2,0) node[right] {$x$}; 
      \draw[->] (0,-1.2) -- (0,4.2) node[above] {$f(x)$};
      \draw[color=red]    plot (\x,\x)             node[right] {$f(x) =x$}; 
      \draw[color=blue]   plot (\x,{sin(\x r)})    node[right] {$f(x) = \sin x$}; 
      \draw[color=orange] plot (\x,{0.05*exp(\x)}) node[right] {$f(x) = \frac{1}{20} \mathrm e^x$};
    \end{tikzpicture}
  \end{document}
  `,
  html: String.raw`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>SVG holder</title>
    </head>
    <body>
      <h1>Behold an SVG!</h1>
      <p>
        Enim eos unde. Magnam consequatur dignissimos. Mollitia illum et et
        placeat. Laudantium laudantium minus occaecati aliquid. Qui consequatur
        doloremque harum ut voluptatem totam saepe qui. Vero tempora
        necessitatibus commodi hic. Est debitis delectus quae cumque. Aut quos in
        unde repellendus. Similique aut nihil cupiditate nam quia velit
        perspiciatis eum. Iusto sed voluptatem odit labore. Ea reiciendis
        molestiae natus eum sequi. Deleniti reprehenderit officia sed voluptatem
        perferendis quia quo autem reiciendis. Beatae eaque nobis unde debitis
        cupiditate. Nam alias eius est. Vel enim a facilis omnis ut voluptatibus.
        Sint ab dolores nisi debitis corrupti rerum dolorem voluptates incidunt.
      </p>
    </body>
  </html>
  `,
  svg: String.raw`
    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 100 100">

      <title>SVG Logo</title>

      <a xlink:href="http://www.w3.org/Graphics/SVG/" target="_parent"
        xlink:title="W3C SVG Working Group home page">

        <rect
            id="background"
            fill="#FF9900"
            width="100"
            height="100"
            rx="4"
            ry="4"/>

        <rect
            id="top-left"
            fill="#FFB13B"
            width="50"
            height="50"
            rx="4"
            ry="4"/>

        <rect
            id="bottom-right"
            x="50"
            y="50"
            fill="#DE8500"
            width="50"
            height="50"
            rx="4"
            ry="4"/>

        <g id="circles" fill="#FF9900">
            <circle
                id="n"
                cx="50"
                cy="18.4"
                r="18.4"/>

            <circle
                id="ne"
                cx="72.4"
                cy="27.6"
                r="18.4"/>

            <circle
                id="e"
                cx="81.6"
                cy="50"
                r="18.4"/>

            <circle
                id="se"
                cx="72.4"
                cy="72.4"
                r="18.4"/>

            <circle
                id="s"
                cx="50"
                cy="81.6"
                r="18.4"/>

            <circle
                id="sw"
                cx="27.6"
                cy="72.4"
                r="18.4"/>

            <circle
                id="w"
                cx="18.4"
                cy="50"
                r="18.4"/>

            <circle
                id="nw"
                cx="27.6"
                cy="27.6"
                r="18.4"/>
        </g>

        <g id="stars">
            <path
                id="black-star"
                d="M  63.086, 18.385
                  c  0.000, -7.227  -5.859,-13.086 -13.100,-13.086
                  c -7.235,  0.000 -13.096,  5.859 -13.096, 13.086
                  c -5.100, -5.110 -13.395, -5.110 -18.497,  0.000
                  c -5.119,  5.120  -5.119, 13.408   0.000, 18.524
                  c -7.234,  0.000 -13.103,  5.859 -13.103, 13.085
                  c  0.000,  7.230   5.870, 13.098  13.103, 13.098
                  c -5.119,  5.110  -5.119, 13.395   0.000, 18.515
                  c  5.102,  5.104  13.397,  5.104  18.497,  0.000
                  c  0.000,  7.228   5.860, 13.083  13.096, 13.083
                  c  7.240,  0.000  13.100, -5.855  13.100,-13.083
                  c  5.118,  5.104  13.416,  5.104  18.513,  0.000
                  c  5.101, -5.120   5.101,-13.410   0.000,-18.515
                  c  7.216,  0.000  13.081, -5.869  13.081,-13.098
                  c  0.000, -7.227  -5.865,-13.085 -13.081,-13.085
                  c  5.101, -5.119   5.101,-13.406   0.000,-18.524
                  C 76.502, 13.275  68.206, 13.275  63.086, 18.385 z"/>

            <path
                id="white-star"
                fill="#FFFFFF"
                d="M 55.003, 23.405
                  v 14.488
                  L 65.260, 27.640
                  c  0.000, -1.812  0.691,-3.618   2.066, -5.005
                  c  2.780, -2.771  7.275,-2.771  10.024,  0.000
                  c  2.771,  2.766  2.771, 7.255   0.000, 10.027
                  c -1.377,  1.375 -3.195, 2.072  -5.015,  2.072
                  L 62.101, 44.982
                  H 76.590
                  c  1.290, -1.280  3.054,-2.076   5.011, -2.076
                  c  3.900,  0.000  7.078, 3.179   7.078,  7.087
                  c  0.000,  3.906 -3.178, 7.088  -7.078,  7.088
                  c -1.957,  0.000 -3.721,-0.798  -5.011, -2.072
                  H 62.100
                  l 10.229, 10.244
                  c  1.824,  0.000  3.642, 0.694   5.015,  2.086
                  c  2.774,  2.759  2.774, 7.250   0.000, 10.010
                  c -2.750,  2.774 -7.239, 2.774 -10.025,  0.000
                  c -1.372, -1.372 -2.064,-3.192  -2.064, -5.003
                  L 55.000, 62.094
                  v 14.499
                  c  1.271,  1.276  2.084, 3.054   2.084,  5.013
                  c  0.000,  3.906 -3.177, 7.077  -7.098,  7.077
                  c -3.919,  0.000 -7.094,-3.167  -7.094, -7.077
                  c  0.000, -1.959  0.811,-3.732   2.081, -5.013
                  V 62.094
                  L 34.738, 72.346
                  c  0.000,  1.812 -0.705, 3.627  -2.084,  5.003
                  c -2.769,  2.772 -7.251, 2.772 -10.024,  0.000
                  c -2.775, -2.764 -2.775,-7.253   0.000,-10.012
                  c  1.377, -1.390  3.214,-2.086   5.012, -2.086
                  l 10.257,-10.242
                  H 23.414
                  c -1.289,  1.276 -3.072, 2.072  -5.015,  2.072
                  c -3.917,  0.000 -7.096,-3.180  -7.096, -7.088
                  s  3.177, -7.087  7.096,-7.087
                  c  1.940,  0.000  3.725, 0.796   5.015,  2.076
                  h 14.488
                  L 27.646, 34.736
                  c -1.797,  0.000 -3.632,-0.697  -5.012, -2.071
                  c -2.775, -2.772 -2.775,-7.260   0.000,-10.027
                  c  2.773, -2.771  7.256,-2.771  10.027,  0.000
                  c  1.375,  1.386  2.083, 3.195   2.083,  5.005
                  l 10.235, 10.252
                  V 23.407
                  c -1.270, -1.287 -2.082,-3.053  -2.082, -5.023
                  c  0.000, -3.908  3.175,-7.079   7.096, -7.079
                  c  3.919,  0.000  7.097, 3.168   7.097,  7.079
                  C 57.088, 20.356 56.274,22.119  55.003, 23.405 z"/>
        </g>

        <g id="svg-textbox">
            <path
                id="text-backdrop"
                fill="black"
                d="M  5.30,50.00
                  H 94.68
                  V 90.00
                  Q 94.68,95.00 89.68,95.00
                  H 10.30
                  Q  5.30,95.00  5.30,90.00 Z"/>

            <path 
                id="shine"
                fill="#3F3F3F"
                d="M  14.657,54.211
                  h  71.394
                  c   2.908, 0.000   5.312, 2.385   5.312, 5.315
                  v  17.910
                  c -27.584,-3.403 -54.926,-8.125 -82.011,-7.683
                  V  59.526
                  C   9.353,56.596  11.743,54.211  14.657,54.211
                  L  14.657,54.211 z"/>

            <g id="svg-text">
                <title>SVG</title>
                <path
                    id="S"
                    fill="#FFFFFF"
                    stroke="#000000"
                    stroke-width="0.5035"
                    d="M 18.312,72.927
                      c -2.103,-2.107  -3.407, -5.028  -3.407, -8.253
                      c  0.000,-6.445   5.223,-11.672  11.666,-11.672
                      c  6.446, 0.000  11.667,  5.225  11.667, 11.672
                      h -6.832
                      c  0.000,-2.674  -2.168, -4.837  -4.835, -4.837
                      c -2.663, 0.000  -4.838,  2.163  -4.838,  4.837
                      c  0.000, 1.338   0.549,  2.536   1.415,  3.420
                      l  0.000, 0.000
                      c  0.883, 0.874   2.101,  1.405   3.423,  1.405
                      v  0.012
                      c  3.232, 0.000   6.145,  1.309   8.243,  3.416
                      l  0.000, 0.000
                      c  2.118, 2.111   3.424,  5.034   3.424,  8.248
                      c  0.000, 6.454  -5.221, 11.680 -11.667, 11.680
                      c -6.442, 0.000 -11.666, -5.222 -11.666,-11.680
                      h  6.828
                      c  0.000, 2.679   2.175,  4.835   4.838,  4.835
                      c  2.667, 0.000   4.835, -2.156   4.835, -4.835
                      c  0.000,-1.329  -0.545, -2.527  -1.429, -3.407
                      l  0.000, 0.000
                      c -0.864,-0.880  -2.082, -1.418  -3.406, -1.418
                      l  0.000, 0.000
                      C 23.341,76.350  20.429, 75.036  18.312, 72.927
                      L 18.312,72.927
                      L 18.312,72.927 z"/>
                <polygon
                    id="V"
                    fill="#FFFFFF"
                    stroke="#000000"
                    stroke-width="0.5035"
                    points="61.588,53.005
                            53.344,92.854
                            46.494,92.854
                            38.236,53.005
                            45.082,53.005
                            49.920,76.342
                            54.755,53.005"/>

            <path 
                id="G"
                fill="#FFFFFF"
                stroke="#000000"
                stroke-width="0.5035"
                d="M 73.255,69.513
                  h 11.683
                  v 11.664
                  l  0.000, 0.000
                  c  0.000, 6.452  -5.226,11.678 -11.669, 11.678
                  c -6.441, 0.000 -11.666,-5.226 -11.666,-11.678
                  l  0.000, 0.000
                  V 64.676
                  h -0.017
                  C 61.586,58.229  66.827,53.000  73.253, 53.000
                  c  6.459, 0.000  11.683, 5.225  11.683, 11.676
                  h -6.849
                  c  0.000,-2.674  -2.152,-4.837  -4.834, -4.837
                  c -2.647, 0.000  -4.820, 2.163  -4.820,  4.837
                  v 16.501
                  l  0.000, 0.000
                  c  0.000, 2.675   2.173, 4.837   4.820,  4.837
                  c  2.682, 0.000   4.834,-2.162   4.834, -4.827
                  v -0.012
                  v -4.827
                  h -4.834
                  L 73.255,69.513
                  L 73.255,69.513 z"/>
            </g>
        </g>
      </a>
    </svg>
    `
};