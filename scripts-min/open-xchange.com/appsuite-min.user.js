// ==UserScript==
// @name         appsuite: age
// @version      0.0.1
// @icon         https://raw2.github.com/solygen/userscripts/master/doc/icon/icon_032.png
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
// 
// @include      http://ox/appsuite/*
// @include      https://appsuite-dev.open-xchange.com*
// @include      https://appsuite-sprint.open-xchange.com*
// @include      http://docs-dev-cont-nightly.oxhh.int/appsuite*
// @include      https://ui-dev.open-xchange.com*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts-min/open-xchange.com/appsuite-min.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts-min/open-xchange.com/appsuite-min.user.js
// @homepage     https://github.com/solygen/userscripts
// ==/UserScript==
!function(){"use strict";function a(a){for(var b=["sec","min","hour","day","week","month","year","decade"],c=["60","60","24","7","4.35","12","10"],d=new Date,e=(d-a)/1e3-3600,f=0;e>=c[f]&&f<c.length-1;f++)e/=c[f];return e=Math.round(e),1!==e&&(b[f]+="s"),e+" "+b[f]}var b=setInterval(function(){var c=new Date,d=$($(".launchers").find("li")[0]).clone();return d.length?(//set date by ox version
c.setYear(ox.version.substr(-15,4)),c.setMonth(ox.version.substr(-11,2)-1),c.setDate(ox.version.substr(-9,2)),c.setHours(ox.version.substr(-6,2)),c.setMinutes(ox.version.substr(-4,2)),c.setSeconds(ox.version.substr(-2,2)),//append to DOM
/* jshint -W107 */
d.find("a").text(a(c)).attr("href",'javascript: ox.cache.clear().done(function() { console.log("cache clear"); })').css("color","rgb(255, 122, 0)"),/* jshint +W107 */
$(".launchers").prepend(d),clearInterval(b),void 0):!1},500)}();