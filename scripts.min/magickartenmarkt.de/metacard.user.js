// ==UserScript==
// @name         skip meta card page
// @description  magiccardmarket.eu and magickartenmarkt.de
// @version      0.0.3
// @namespace    https://github.com/solygen/userscripts-and-bookmarklets
// @repository   https://github.com/solygen/userscripts-and-bookmarklets.git
// @license      MIT
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
//
// @include      https://www.magickartenmarkt.de/?mainPage=showMetacard&idMetacard=*
// @include      https://www.magiccardmarket.eu/?mainPage=showMetacard&idMetacard=*
// @include      https://fr.magiccardmarket.eu/?mainPage=showMetacard&idMetacard=*
// @include      https://es.magiccardmarket.eu/?mainPage=showMetacard&idMetacard=*
// @include      https://id.magiccardmarket.eu/?mainPage=showMetacard&idMetacard=*
//
// @include      https://www.magickartenmarkt.de/?mainPage=showSearchResult&searchFor=*&redirect=true
// @include      https://www.magiccardmarket.eu/?mainPage=showSearchResult&searchFor=*&redirect=true
// @include      https://fr.magiccardmarket.eu/?mainPage=showSearchResult&searchFor=*&redirect=true
// @include      https://es.magiccardmarket.eu/?mainPage=showSearchResult&searchFor=*&redirect=true
// @include      https://id.magiccardmarket.eu/?mainPage=showSearchResult&searchFor=*&redirect=true
//
// @updateURL    https://raw.github.com/solygen/userscripts-and-bookmarklets/master/magickartenmarkt.de/metacard.user.js
// @downloadURL  https://raw.github.com/solygen/userscripts-and-bookmarklets/master/magickartenmarkt.de/metacard.user.js
// @homepage     https://github.com/solygen/userscripts-and-bookmarklets
//
// ==/UserScript==
//redirect to first 'appears in' link
!function(){"use strict";//metalink
$(".standard_content")&&(document.location=$($(".standard_content").find("a")[1]).attr("href")),//search result
$(".SearchTable")&&(document.location=$($(".SearchTable").find("a")[1]).attr("href"))}();