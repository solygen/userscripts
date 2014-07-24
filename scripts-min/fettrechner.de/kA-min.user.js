// ==UserScript==
// @name         hide 'k. A.' content
// @description  fettrechner.de
// @version      0.0.1
// @icon         https://raw2.github.com/solygen/userscripts/master/doc/icon/icon_032.png
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
//
// @include      http://www.fettrechner.de/cgi-bin/kalorientabelle.pl*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts-min/fettrechner.de/kA-min.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts-min/fettrechner.de/kA.user.js
// @homepage     https://github.com/solygen/userscripts
// ==/UserScript==
!function(){"use strict";var a=document.body.querySelectorAll(".zahl"),b=Array.prototype.slice.call(a,0);b.forEach(function(a){a.textContent=a.textContent.search("A.")>-1?"":a.textContent})}();