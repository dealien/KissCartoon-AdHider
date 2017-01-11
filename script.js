// ==UserScript==
// @name         KissCartoon Ad Hider
// @version      1
// @description  Hide advertisements on KissCartoon without triggering their adblocking detector.
// @author       dealien (https://github.com/dealien)
// @match        http://kisscartoon.se/*
// ==/UserScript==


(function() {
    var a = document.getElementsByTagName('a');
    var toClick = a.length - 1;
    var clicked = 0;

    // Find toClick a tags containing "Hide" and click 'em.
    for (var i = 0; i < a.length; ++i) {
        if (a[i].innerHTML === "Hide") {
            // Decrement i after because the array of a tags actually
            // shrinks once one of the a tags is clicked and removed.
            a[i--].click();
            if (++clicked === toClick) {
                break;
            }
        }
    }
})();
