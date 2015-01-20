// ==UserScript==
// @name         wdr wetter: hide some ui elements
// @description  wdr.de
// @version      1.0.0
// @icon         http://www.google.com/s2/favicons?domain=www.wdr.de
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
//
// @include      http://www1.wdr.de/themen/infokompakt/wetter/*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts/wdr.de/hide.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts/wdr.de/hide.user.js
// @homepage     https://github.com/solygen/userscripts

// ==/UserScript==

(function () {

    var t = $('#contentRow');
    $(document.body).empty();
    $(document.body).append(t);
    $('.wetter-right-column').hide();
    $('#wetter').css('background-color', 'initial');
    $('#mainColumn').css('padding', '20px');

})();
