// ==UserScript==
// @name         hide already stared trending repos
// @description  github.com
// @version      1.0.0
// @grant        none
// @icon         http://www.google.com/s2/favicons?domain=www.github.com
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
//
// @include      https://github.com/trending*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts/github.com/trending.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts/github.com/trending.user.js
// @homepage     https://github.com/solygen/userscripts

// ==/UserScript==

(function () {

    'use strict';

    var list = $('.repo-leaderboard-list-item'),
        repo;

    list.each(function (index, item) {
        repo = $(item);
        if (repo.find('.starring-container.on').length)
            repo.remove();
        });
})();
