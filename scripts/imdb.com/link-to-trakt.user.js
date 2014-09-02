// ==UserScript==
// @name         show link to trakt.tv (based on IMDB2Trakt from Arias)
// @description  imdb.com
// @version      0.0.1
// @icon         http://www.google.com/s2/favicons?domain=www.imdb.com
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
//
// @include      http://www.imdb.com/title/*
// @include      https://www.imdb.com/title/*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts/imdb.com/link-to-trakt.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts/imdb.com/link-to-trakt.user.js
// @homepage     https://github.com/solygen/userscripts
//
// ==/UserScript==

(function () {

    'use strict';

    var container = document.querySelector('#overview-top .infobar'),
        separator = document.createElement('span'),
        node = document.createElement('a'),
        // uggly way of getting imdb-ID
        id = document.URL.substring(26,35);

    // add separator char
    separator.innerHTML = '&nbsp;-&nbsp;';

    // href for searching with the imdb-ID
    node.href = 'http://trakt.tv/search/imdb?q=' + id;

    node.textContent = 'Search Trakt.tv';
    // node.setAttribute('target','_blank');

    container.appendChild(separator);
    container.appendChild(node);

})();
