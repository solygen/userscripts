// ==UserScript==
// @name         show link to trakt.tv (based on IMDB2Trakt from Arias)
// @description  imdb.com
// @version      0.0.1
// @icon         http://www.google.com/s2/favicons?domain=www.imdb.com
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
//
// @include      http://www.imdb.com/title/*
// @include      https://www.imdb.com/title/*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts-min/imdb.com/link-to-trakt-min.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts-min/imdb.com/link-to-trakt-min.user.js
// @homepage     https://github.com/solygen/userscripts
//
// ==/UserScript==
!function(){"use strict";var a=document.querySelector("#overview-top .infobar"),b=document.createElement("span"),c=document.createElement("a"),// uggly way of getting imdb-ID
d=document.URL.substring(26,35);// add separator char
b.innerHTML="&nbsp;-&nbsp;",// href for searching with the imdb-ID
c.href="http://trakt.tv/search/imdb?q="+d,c.textContent="Search Trakt.tv",// node.setAttribute('target','_blank');
a.appendChild(b),a.appendChild(c)}();