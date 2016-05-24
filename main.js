(function(window, document, undefined) {

    "use strict";

  var processLanguageBlocks = function (language) {
    var clojureCodeBlocks = document.querySelectorAll('pre.src-' + language);
    for (var i = 0; i < clojureCodeBlocks.length; i++) {
      var block = clojureCodeBlocks[i];
      block.classList.remove("src-" + language);
      block.classList.remove("src");
      block.classList.add("" + language);
      block.classList.add("src");
    }
  };

    var main = function() {
      /* Toggle comments */
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

      /* Nice code blocks */
      var hljsOptions = {languages: ["clojure", "c"]};
      hljs.configure(hljsOptions);

      for (var i = 0; i < hljsOptions.languages.length; i++) {
        processLanguageBlocks(hljsOptions.languages[i]);
      }

      var codeBlocks = document.querySelectorAll('pre.src');
      for (var i = 0; i < codeBlocks.length; i++) {
        var block = codeBlocks[i];
        hljs.highlightBlock(block);
      }
    };

    window.onload = main;

})(this, document);
