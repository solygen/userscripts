// ==UserScript==
// @name         wetter.com: hide some ui elements
// @description  wetter.com
// @version      1.0.0
// @icon         http://www.google.com/s2/favicons?domain=www.wetter.com
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
//
// @include      http://www.wetter.com/wetter_aktuell/wettervorhersage/*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts/wetter.com/hide.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts/wetter.com/hide.user.js
// @homepage     https://github.com/solygen/userscripts

// ==/UserScript==

(function () {
    $('.localBox').remove();
    $('.videoWidget').remove();
    $('.vertical-margin-bottom').remove();
    $('#narrowcolumn').remove();
})();
