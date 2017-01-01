// ==UserScript==
// @name         highlight games available for mac
// @description  bundlestars.com/en/bundle/
// @version      1.0.0
// @grant        none
// @icon         http://www.google.com/s2/favicons?domain=www.bundlestars.com
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
//
// @include      https://www.bundlestars.com/en/bundle/*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts/bundlestars.com/highlight-mac.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts/g2a.com/hide-ads.user.js
// @homepage     https://github.com/solygen/userscripts

// ==/UserScript==

(function () {

    'use strict';

    window.setTimeout(function () {
        $('.bsi-windows, .bsi-linux').css('color', '#555')
            .closest('.panel-heading').find('img').css('opacity', '.1');
        $('.bsi-apple:not(.ng-hide)').closest('.panel-heading').find('.cover img').css('opacity', '.9');
    }, 1000);
})();
