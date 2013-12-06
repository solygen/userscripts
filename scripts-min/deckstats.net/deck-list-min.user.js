// ==UserScript==
// @name         deck list: sort your deck list by name and hide timestamp
// @description  deckstats.net
// @version      0.0.1
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
//
// @include      http://deckstats.net/decks/*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts-min/deckstats.net/deck-list-min.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts-min/deckstats.net/deck-list-min.user.js
// @homepage     https://github.com/solygen/userscripts
// ==/UserScript==
!function(){"use strict";var a=[];//hide timestamp
$(".decks_list.decks_list_narrow").find(".decks_list_subtitle").remove(),//detach rows
a=$(".decks_list.decks_list_narrow").find("tr").remove(),//sort
a.sort(function(a,b){var c=$(a).find("a").text().trim(),d=$(b).find("a").text().trim();return d>c?-1:c>d?1:0}),//attach rows again
$(".decks_list.decks_list_narrow").find("tbody").append(a)}();