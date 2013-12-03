// ==UserScript==
// @name         skip meta card page
// @description  magiccardmarket.eu and magickartenmarkt.de
// @version      0.0.2
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
// @include      https://www.magickartenmarkt.de/?mainPage=showSearchResult&searchFor=*
// @include      https://www.magiccardmarket.eu/?mainPage=showSearchResult&searchFor=*
// @include      https://fr.magiccardmarket.eu/?mainPage=showSearchResult&searchFor=*
// @include      https://es.magiccardmarket.eu/?mainPage=showSearchResult&searchFor=*
// @include      https://id.magiccardmarket.eu/?mainPage=showSearchResult&searchFor=*
//
// @updateURL    https://raw.github.com/solygen/userscripts-and-bookmarklets/master/magickartenmarkt.de/metacard.user.js
// @downloadURL  https://raw.github.com/solygen/userscripts-and-bookmarklets/master/magickartenmarkt.de/metacard.user.js
// @homepage     https://github.com/solygen/userscripts-and-bookmarklets
//
// ==/UserScript==

//redirect to first 'appears in' link

//metalink
if ($('.standard_content'))
    document.location = $($('.standard_content').find('a')[1]).attr('href');
//search result
if ($('.SearchTable'))
    document.location = $($('.SearchTable').find('a')[1]).attr('href');

