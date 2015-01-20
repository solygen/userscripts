// ==UserScript==
// @name         proxies: redirect to card view after adding proxy
// @description  magiccards.info
// @version      1.0.0
// @grant        none
// @icon         http://magiccards.info/images/mini.gif
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
//
// @include      http://magiccards.info/proxy?add*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts/magiccards.info/proxies.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts/magiccards.info/proxies.user.js
// @homepage     https://github.com/solygen/userscripts
//
// ==/UserScript==

//redirect to calling page after added proxies
(function () {

    'use strict';

    window.history.back();
})();
