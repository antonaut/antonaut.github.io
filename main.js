(function(window, document, undefined) {

    "use strict";
    
    /**
       @Constructor
    */
    var Class = function() {
        this.a = null;
    };

    Class.prototype.method = function(arg) {
        this.a = arg;

        console.log("Called method!");
    };


    var main = function() {

        var instance = Class();

        instance.method();

    };
    
    window.main = main;

})(this, document);
