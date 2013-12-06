// ==UserScript==
// @name         detail view: add average card price (sold)
// @description  magiccardmarket.eu, magickartenmarkt.de
// @version      0.0.2
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
//
// @include      https://www.magickartenmarkt.de/*.prod
// @include      https://www.magiccardmarket.eu/*.prod
// @include      https://fr.magiccardmarket.eu/*.prod
// @include      https://es.magiccardmarket.eu/*.prod
// @include      https://id.magiccardmarket.eu/*.prod
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts-min/magickartenmarkt.de/detail-view.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts-min/magickartenmarkt.de/detail-view.user.js
// @homepage     https://github.com/solygen/userscripts

// ==/UserScript==

(function () {

    'use strict';

    //get chart node
    var tmp = $($.parseHTML($('embed').attr('flashvars').split('dataXML=').splice(1, 1)[0])).find('line'),
        //i18n
        text = ((navigator.language || navigator.userLanguage) === 'de' ? 'Durchschnittspreis VK' : 'Average price (sold)'),
        //extract data
        start = tmp.attr('startvalue'),
        end = tmp.attr('endvalue'),
        mid = String(parseFloat((start + end)).toFixed(2) + '  €').replace('.', ',');

    //remoe old one
    $('.custom').remove();
    //add data to dom
    var row = $($('.availTable').find('tr')[0]).clone();
    row.css('font-size', 'larger')
        .css('color', 'chartreuse')
        .addClass('custom');
    row.find('.cell_0_1').text(mid);
    row.find('.cell_0_0').text(text);
    $('.availTable').prepend(row);
})();
