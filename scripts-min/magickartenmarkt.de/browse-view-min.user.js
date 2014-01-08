// ==UserScript==
// @name         browse view: cleaner view by hiding duplicate name information
// @description  magiccardmarket.eu, magickartenmarkt.de
// @version      0.0.1
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
//
// @include      https://www.magickartenmarkt.de/?mainPage=browseUserProducts*
// @include      https://www.magiccardmarket.eu/?mainPage=browseUserProducts*
// @include      https://fr.magiccardmarket.eu/?mainPage=browseUserProducts*
// @include      https://es.magiccardmarket.eu/?mainPage=browseUserProducts*
// @include      https://id.magiccardmarket.eu/?mainPage=browseUserProducts*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts-min/magickartenmarkt.de/browse-view-min.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts-min/magickartenmarkt.de/browse-view-min.user.js
// @homepage     https://github.com/solygen/userscripts
// ==/UserScript==
!function(){"use strict";var a,b=$($.find(".col_2")).find("a"),c=$($("#siteContents").children()[2]),d=0;$.each(b,function(b,c){var e=$(c),f=e.text(),g=a===f;a=f,g?e.text(""):d++}),c.text(d+" hits")}();