(function(window, document, undefined) {

    "use strict";


    var main = function() {
      var firstPress = true;
      var disqusToggle = document.querySelector("#disqus-toggle");
      disqusToggle.onclick = function (event) {
        var disqusThreadContainer = document.querySelector("#disqus_thread_container");
        if (firstPress) { // Nothing happened on first click, so coerce it to show.
          firstPress = false;
          disqusThreadContainer.style.display = 'block';
          return;
        }

        var previous = disqusThreadContainer.style.display;
        disqusThreadContainer.style.display = previous === 'none' ? 'block' : 'none';
      };

      setTimeout(function() {
        var disqusToggle = document.querySelector("#disqus-toggle");
        if (window.innerWidth >= 768) { // Responsive eh?
          disqusToggle.style.display = 'block';
        }
      }, 3000);

      var codeBlocks = document.querySelectorAll('pre.src');
      for (var i = 0; i < codeBlocks.length; i++) {
        var block = codeBlocks[i];
        hljs.highlightBlock(block);
      }
    };

    window.onload = main;

})(this, document);
