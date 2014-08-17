// ==UserScript==
// @name         sort by discount
// @description  zalando.de
// @version      0.0.1
// @icon         https://raw2.github.com/solygen/userscripts/master/doc/icon/icon_032.png
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
//
// @include      http://www.zalando.de/*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts-min/zalando.de/sortbydiscount-min.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts-min/zalando.de/sortbydiscount-min.user.js
// @homepage     https://github.com/solygen/userscripts
//
// ==/UserScript==
//redirect to calling page after added proxies
!function(){"use strict";function a(){var a=$(".productsGridList").first(),b=a.first().children();b.sort(function(a,b){var c=parseInt($(a).find(".salePercentFlag").text().replace("%","")),d=parseInt($(b).find(".salePercentFlag").text().replace("%",""));return d>c?-1:c>d?1:0}),a.empty(),a.append(b)}var b=$(".sortBySelect");b.length&&b.parent().append($("<label>").css("padding-left","8px").append($('<a class="userscript">').text("Sort (current page) by discount").click(a)))}();