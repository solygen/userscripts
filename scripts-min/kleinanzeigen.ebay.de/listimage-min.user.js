// ==UserScript==
// @name         listimage
// @description  kleinanzeigen.ebay.de
// @version      0.0.1
// @icon         https://raw2.github.com/solygen/userscripts/master/doc/icon/icon_032.png
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
//
// @include      http://kleinanzeigen.ebay.de/anzeigen/*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts-min/kleinanzeigen.ebay.de/listimage.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts-min/kleinanzeigen.ebay.de/listimage.user.js
// @homepage     https://github.com/solygen/userscripts
// ==/UserScript==
!function(){"use strict";var a,b,c,d,e,f,g,h=0;g=setInterval(function(){c=$("#srchrslt-adtable .c-img-imgbx"),h!==c.length&&(b=$('#srchrslt-adtable .ad-listitem-image a:not(".placeholder-image")'),a=Array.prototype.slice.call(b,0),a.forEach(function(a){a=$(a),d=a.find("img"),e=d.attr("src")||"",e.length&&(//remove img tag
d.remove(),//get full size url
e=e.replace("_9.","_3."),f="url("+e+")",//change style
a.css({height:"140px",width:"140px","background-image":f,"background-position":"center","background-size":"cover","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover"}))}),h=c.length,//done
h===a.count&&clearInterval(g))},500)}();