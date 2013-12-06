// ==UserScript==
// @name         deck view: different tweaks
// @description  deckstats.net
// @version      0.0.1
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
//
// @include      http://deckstats.net/decks/*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts-min/deckstats.net/deck-view-min.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts-min/deckstats.net/deck-view-min.user.js
// @homepage     https://github.com/solygen/userscripts
// ==/UserScript==
(function(){"use strict";var a="rgb(196, 159, 39)",b="rgb(119, 119, 119)",c="rgb(0, 0, 0)",d="rgb(132, 47, 7)",e="rgb(4, 26, 72)",f={},g={proxies:[],rarity:{rare:[],uncommon:[],common:[],mythic:[],basic:[]}},h={remove:function(){var a=$(".cardtable");//remove flag and sum
$(a.find(".card_price.header")[1]).empty(),$(a.find(".deck_footer").find(".card_price")[1]).empty()},set:function(){//set banner link to list view
var a=$($("ul#user_menu a")[0]).attr("href");a&&$($("#header_left a")).attr("href",a)},//bigger card preview
register:function(){var a=setInterval(function(){$("#kartenOverlay").css("border","0px").css("width","auto"),$("#kartenOverlayBild").css("height","380px").css("width","266px"),$("#kartenOverlayContent").css("display","none"),$("#kartenOverlay").length&&clearInterval(a)},1e3)},//replace link
replace:function(){for(var a=$("a.cardlink"),b=0;b<a.length;b++){var c=$(a[b]),d=c.attr("href"),e=d.split("=").pop(),f="https://www.magickartenmarkt.de/?mainPage=showSearchResult&searchFor="+e+"&v=card&s=cname&card="+e+"&redirect=true";c.attr("href",f)}},tab:function(){//TODO: own tab
// var bar = $('.ui-tabs-nav'),
//     tab = $(bar.children()[1]).clone(),
//     tabcontent = $('#deck_tabs-spoiler').clone();
// //set tab link
// tab.find('a')
//     .attr('href', '#deck_tabs-proxies')
//     .text('Proxies (' + data.proxies.length +  ')');
// $(tab.find('a'))
//     .on('click', function () {
//         $('.ui-tabs-panel').hide();
//         $('#deck_tabs-proxies').show();
//     });
// //listener
// var others = $('.ui-tabs-nav').find('a'),
//     fn = function () {
//             $('#deck_tabs-proxies').hide();
//         };
// for (var i = 0; i < others.length; i++) {
//     var tmp = $(others[i]);
//     if (tmp.attr('href') !== '#deck_tabs-proxies') {
//         tmp.on('click', fn);
//     }
// }
// //insert
// tab.insertAfter($(bar.children()[1]));
// tabcontent.attr('id', 'deck_tabs-proxies').find('.inhalt').empty();
// //create tab content
// $('#deck_tabs').append(tabcontent);
//write proxie block
if(g.proxies.length){g.proxies.sort(function(a,b){return a.substr(2,1).charCodeAt(0)-b.substr(2,1).charCodeAt(0)}),$(".custom").remove();var a=$($("div.ui-widget")[1]).clone();//set content
$(a.find("p")[0]).empty().append(g.proxies.join("<br>")),//remove title and add bottom margin
a.attr("title","").css("margin","1em .5em"),//prepend to main container
$(".inhalt").prepend(a.addClass("custom"))}},process:function(){this.remove(),this.set(),this.register(),this.replace(),this.tab()}},i={//update rarity
rarity:function(){f.color===a&&g.rarity.rare.push(f.num+" "+f.name),f.color===b&&g.rarity.uncommon.push(f.num+" "+f.name),f.color===c&&g.rarity.common.push(f.num+" "+f.name),f.color===d&&g.rarity.mythic.push(f.num+" "+f.name),f.color===e&&g.rarity.basic.push(f.num+" "+f.name)},//reorder edition column
reorder:function(){var a=$($(f.row.find(".info_link"))[0]),b=a.find("span").remove(),c=a.text().trim().replace("(","").replace(")","").trim();b.text(b.text().trim()),a.text(c+" (").append(b).append(")"),//update rarity statistics
this.rarity(b.css("color"),f.num,f.name)},//identify proxies
identify:function(){var a=f.comment;!a||1!==a.length&&"proxy"!==a||($(f.row.find(".hbtronix_icon")[0]).prop("src","http://i.hbtronix.de/picture_empty.png").css("height","11px").css("width","11px"),1===a.length?g.proxies.push(a+" "+f.name):g.proxies.push(f.num+" "+f.name))},//replace us price
price:function(){$(f.row.find(".card_price")[1]).text(f.each+" €")},process:function(){for(var a=$(".cardtable").find("tr.deck_card"),b=0;b<a.length;b++){var c=$(a[b]);f={row:c,price:$(c.find(".card_price")[0]).text().trim().replace("€",""),num:$(c.find(".card_amount")[0]).text().trim(),name:$(c.find("a")[0]).text().trim(),comment:$(c.find(".hbtronix_icon")[0]).attr("title"),color:$($(c.find(".info_link"))[0]).find("span").css("color")},f.each=(f.price/f.num).toFixed(2),this.price(),this.identify(),this.reorder()}}};return{run:function(){i.process(),h.process()}}})().run();