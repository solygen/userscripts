// ==UserScript==
// @name         view as list: just show plain text
// @description  magiccards.info
// @version      1.0.1
// @grant        none
// @icon         http://magiccards.info/images/mini.gif
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
//
// @include      http://magiccards.info/query?q=*&v=olist*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts/magiccards.info/plain-list.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts/magiccards.info/plain-list.user.js
// @homepage     https://github.com/solygen/userscripts
//
// ==/UserScript==

(function () {

    'use strict';

    var table = document.querySelectorAll('table')[3],
        links = table.querySelectorAll('a'),
        list = [];
    Array.prototype.forEach.call(links, function (node) {
        list.push(node.textContent);
        console.log(node.textContent);
    });
    table.innerHTML = list.join('<br>');
})();
