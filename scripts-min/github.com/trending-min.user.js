// ==UserScript==
// @name         hide already stared trending repos
// @description  github.com
// @version      0.0.1
// @icon         https://raw2.github.com/solygen/userscripts/master/doc/icon/icon_032.png
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
//
// @include      https://github.com/trending*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts-min/github.com/trending-min.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts-min/github.com/trending-min.user.js
// @homepage     https://github.com/solygen/userscripts
// ==/UserScript==
!function(){"use strict";var a,b=$(".repo-leaderboard-list-item");b.each(function(b,c){a=$(c),a.find(".starring-container.on").length&&a.remove()})}();