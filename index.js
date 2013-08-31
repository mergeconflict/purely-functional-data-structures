// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  width: 1600,
  height: 900,
  controls: false,
  progress: true,
  history: true,
  center: true,
  rollingLinks: false,
  transition: 'concave',

  // Optional libraries used to extend on reveal.js
  dependencies: [
    { src: 'reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
  ]
});

Reveal.addEventListener( 'slidechanged', function( event ) {
  if ( ~Reveal.getCurrentSlide().className.indexOf('bzzzt') ) {
    document.getElementById( 'bzzzt' ).play();
  }
} );
