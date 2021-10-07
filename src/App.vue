<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
  }
</script>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  html {
    overflow: hidden;
  }
  body {
    line-height: 1;
    margin: 0 !important;
    font-family: 'Open Sans', sans-serif;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  #app {
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  canvas.drawingBuffer {
      display: none;
  }

  @font-face {
    font-family: 'fontello';
    src: url('./font/fontello.eot?69734639');
    src: url('./font/fontello.eot?69734639#iefix') format('embedded-opentype'),
        url('./font/fontello.woff2?69734639') format('woff2'),
        url('./font/fontello.woff?69734639') format('woff'),
        url('./font/fontello.ttf?69734639') format('truetype'),
        url('./font/fontello.svg?69734639#fontello') format('svg');
    font-weight: normal;
    font-style: normal;
  }
  /* Chrome hack: SVG is rendered more smooth in Windozze. 100% magic, uncomment if you need it. */
  /* Note, that will break hinting! In other OS-es font will be not as sharp as it could be */
  /*
  @media screen and (-webkit-min-device-pixel-ratio:0) {
    @font-face {
      font-family: 'fontello';
      src: url('../font/fontello.svg?69734639#fontello') format('svg');
    }
  }
  */
  [class^="icon-"]:before, [class*=" icon-"]:before {
    font-family: "fontello";
    font-style: normal;
    font-weight: normal;

    display: inline-block;
    text-decoration: inherit;
    width: 1em;
    margin-right: .2em;
    text-align: center;
    /* opacity: .8; */

    /* For safety - reset parent styles, that can break glyph codes*/
    font-variant: normal;
    text-transform: none;

    /* fix buttons height, for twitter bootstrap */
    line-height: 1em;

    /* Animation center compensation - margins should be symmetric */
    /* remove if not needed */
    margin-left: .2em;

    /* you can be more comfortable with increased icons size */
    /* font-size: 120%; */

    /* Font smoothing. That was taken from TWBS */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    /* Uncomment for 3D effect */
    /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */
  }

  .icon-qrcode:before { content: '\e800'; } /* '' */
  .icon-award:before { content: '\e801'; } /* '' */
  .icon-home:before { content: '\e802'; } /* '' */
  .icon-user:before { content: '\e803'; } /* '' */
  .icon-cog:before { content: '\e804'; } /* '' */
  .icon-recycle:before { content: '\f1b8'; } /* '' */
  .icon-diamond:before { content: '\f219'; } /* '' */
</style>
