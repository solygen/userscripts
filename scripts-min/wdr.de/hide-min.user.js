// ==UserScript==
// @name         wdr wetter: hide some ui elements
// @description  wdr.de
// @version      0.0.1
// @icon         https://raw2.github.com/solygen/userscripts/master/doc/icon/icon_032.png
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
//
// @include      http://www1.wdr.de/themen/infokompakt/wetter/*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts-min/wdr.de/hide-min.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts-min/wdr.de/hide-min.user.js
// @homepage     https://github.com/solygen/userscripts
// ==/UserScript==
!function(){var a=$("#contentRow");$(document.body).empty(),$(document.body).append(a),$(".wetter-right-column").hide(),$("#wetter").css("background-color","initial"),$("#mainColumn").css("padding","20px")}();