// ==UserScript==
// @name         transfermarkt: hide ads
// @description  transfermarkt.de
// @version      0.0.2
// @icon         http://www.google.com/s2/favicons?domain=www.transfermarkt.de
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
//
// @include      http://www.transfermarkt.de/*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts-min/transfermarkt.de/hide-min.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts-min/transfermarkt.de/hide-min.user.js
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
