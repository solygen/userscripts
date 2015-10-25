// ==UserScript==
// @name         hide 'k. A.' content
// @description  fettrechner.de
// @version      1.0.1
// @grant        none
// @icon         http://www.google.com/s2/favicons?domain=www.fettrechner.de
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
//
// @include      http://www.fettrechner.de/cgi-bin/kalorientabelle.pl*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts/fettrechner.de/kA.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts/fettrechner.de/kA.user.js
// @homepage     https://github.com/solygen/userscripts

// ==/UserScript==

(function () {

    'use strict';

    var nodeList = document.body.querySelectorAll('.zahl'),
        list = Array.prototype.slice.call(nodeList, 0);

    list.forEach(function (node) {
        node.textContent = node.textContent.search('A.') > -1 ? '' : node.textContent;
    });
})();
