// ==UserScript==
// @name         redirect to card view after adding proxy
// @description  magiccards.info
// @version      0.0.1
// @namespace    https://github.com/solygen/userscripts-and-bookmarklets
// @repository   https://github.com/solygen/userscripts-and-bookmarklets.git
// @license      MIT
//
// @include      http://magiccards.info/proxy?add*
//
// @updateURL    https://rawgithub.com/solygen/userscripts-and-bookmarklets/master/magiccards.info/proxies.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts-and-bookmarklets/master/magiccards.info/proxies.user.js
// @homepage     https://github.com/solygen/userscripts-and-bookmarklets
//
// ==/UserScript==
//redirect to calling page after added proxies
!function(){window.history.back()}();