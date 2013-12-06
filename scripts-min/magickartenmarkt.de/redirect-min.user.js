// ==UserScript==
// @name         redirect: skip meta card page / skip search result page
// @description  magiccardmarket.eu and magickartenmarkt.de
// @version      0.0.4
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
//
// @include      https://www.magickartenmarkt.de/?mainPage=showMetacard&idMetacard=*
// @include      https://www.magiccardmarket.eu/?mainPage=showMetacard&idMetacard=*
// @include      https://fr.magiccardmarket.eu/?mainPage=showMetacard&idMetacard=*
// @include      https://es.magiccardmarket.eu/?mainPage=showMetacard&idMetacard=*
// @include      https://id.magiccardmarket.eu/?mainPage=showMetacard&idMetacard=*
//
// @include      https://www.magickartenmarkt.de/?mainPage=showSearchResult&searchFor=*
// @include      https://www.magiccardmarket.eu/?mainPage=showSearchResult&searchFor=*
// @include      https://fr.magiccardmarket.eu/?mainPage=showSearchResult&searchFor=*
// @include      https://es.magiccardmarket.eu/?mainPage=showSearchResult&searchFor=*
// @include      https://id.magiccardmarket.eu/?mainPage=showSearchResult&searchFor=*
//
// @updateURL    https://raw.github.com/solygen/userscripts/master/scripts-min/magickartenmarkt.de/metacard-min.user.js
// @downloadURL  https://raw.github.com/solygen/userscripts/master/scripts-min/magickartenmarkt.de/metacard-min.user.js
// @homepage     https://github.com/solygen/userscripts
//
// ==/UserScript==
//redirect to first 'appears in' link (only used when link is called from a ressource that adds '&redirect=true' to url)
!function(){"use strict";if($(".standard_content").length)//metalink
document.location=$($(".standard_content").find("a")[1]).attr("href");else if($(".SearchTable")){//search result
var a,b=$(".SearchTable tbody tr"),c={};for(a=b.length-1;a>=0;a--){var d=$(b[a]),e=$(d.children().find("a")[0]).text();c[e]=!0}//redirect if only one card is found
1===Object.keys(c).length&&(document.location=$($(".SearchTable").find("a")[1]).attr("href"))}}();