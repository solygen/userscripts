// ==UserScript==
// @name         Add Gravatar Everywhere
// @namespace    http://docwhat.gerf.org/
// @description  Adds gravatars to all a@href="mailto:" links
// @require      https://rawgithub.com/solygen/userscripts/master/lib/md5.js
// @include      https://bugs.open-xchange.com/show_bug.cgi*
// ==/UserScript==
!function(){"use strict";var a="undefined"==typeof GM_getValue,b=function(b){var c;return a?c=md5(b):(c=GM_getValue(b),c||(c=md5(b),GM_setValue(b,c))),c},c=function(a){"string"==typeof a&&(a=document.getElementById(a));var c=a.href.replace(/^mailto:/,"").replace(/\?.*$/,"").toLowerCase(),d=["http://www.gravatar.com/avatar.php?gravatar_id=",b(c),//'&d=identicon',
//'&d=wavatar',
"&d=monsterid","&s=",24].join("");a.innerHTML='<img src="'+d+'" style="border: none; vertical-align: middle"/> '+a.innerHTML},d=function(){try{var a,b,d=document.getElementsByTagName("a"),e=d.length,f=/^mailto:.*@/;for(b=0;e>b;b++)a=d[b],f.test(a.href)&&!function(){var b=a;setTimeout(function(){c(b)},10)}()}catch(g){alert("debug: "+g)}};a?d():window.addEventListener("load",d,!1)}();