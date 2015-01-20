// ==UserScript==
// @name         transfermarkt: hide ads
// @description  transfermarkt.de
// @version      1.0.0
// @grant        none
// @icon         http://www.google.com/s2/favicons?domain=www.transfermarkt.de
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
//
// @include      http://www.transfermarkt.de/*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts/transfermarkt.de/hide.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts/transfermarkt.de/hide.user.js
// @homepage     https://github.com/solygen/userscripts

// ==/UserScript==

(function () {
    //all
    $('iframe, .werbung, .naviback').remove();
    $('.bildquelle').remove();
    //landing page only
    if (window.location.href.length <= 29) {
        $('.werbung_wetten').parent().remove();
        $('.news-topthema, .news-weitere').parent().removeClass('eight').addClass('twelve');
    }
})();
