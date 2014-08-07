// ==UserScript==
// @name         transfermarkt: hide ads
// @description  transfermarkt.de
// @version      0.0.1
// @icon         https://raw2.github.com/solygen/userscripts/master/doc/icon/icon_032.png
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
// @require      http://cdnjs.cloudflare.com/ajax/libs/jquery.tablesorter/2.13.3/jquery.tablesorter.js
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
    //landing page only
    if (window.location.href.length <= 29) {
        $('.werbung_wetten').parent().remove();
        $('.news-topthema, .news-weitere').parent().removeClass('eight').addClass('twelve');
    }
})();
