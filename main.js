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

    var drawSvgAnimations = function() {
        if (!SVG) return;
        if (!SVG.supported) return;
        var draw = SVG('drawing');
        var rect = draw.rect(100, 100).fill('#fa0');
        var leftEye = draw.group();
        leftEye.line(20, 20, 25, 20).stroke({width: 5, linecap: 'round'});
        leftEye.line(25, 20, 25, 30).stroke({width: 5, linecap: 'round'});
        leftEye.line(19, 28, 20, 27).stroke({width: 5, linecap: 'round'});

        var rightEye = draw.group();
        rightEye.line(75, 20, 80, 20).stroke({width: 5, linecap: 'round'});
        rightEye.line(75, 20, 75, 30).stroke({width: 5, linecap: 'round'});


    };
    //drawSvgAnimations();

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
