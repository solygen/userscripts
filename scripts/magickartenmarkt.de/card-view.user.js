// ==UserScript==
// @name         card view: add average card price (sold)
// @description  https://github.com/solygen/userscripts/blob/master/doc/magickartenmarkt.de.md#card-viewuserjs
// @version      0.0.1
// @icon         https://raw2.github.com/solygen/userscripts/master/doc/icon/icon_032.png
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
// @include      https://www.magickartenmarkt.de/?mainPage=register
// @include      https://www.magiccardmarket.eu/?mainPage=register
// @include      https://fr.magiccardmarket.eu/?mainPage=register
// @include      https://es.magiccardmarket.eu/?mainPage=register
// @include      https://id.magiccardmarket.eu/?mainPage=register
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts-min/magickartenmarkt.de/card-view-min.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts-min/magickartenmarkt.de/card-view-min.user.js
// @homepage     https://github.com/solygen/userscripts

// ==/UserScript==

(function () {

    'use strict';

    //get chart node
    var tmp = $($.parseHTML($('embed').attr('flashvars').split('dataXML=').splice(1, 1)[0])).find('line'),
        name = document.title.split('(')[0].trim(),
        //extract data
        min = tmp.attr('startvalue'),
        max = tmp.attr('endvalue'),
        average = parseFloat((min + max)).toFixed(2),
        //i18n
        price = String(average + '  €').replace('.', ',');

    //add current price to local storage
    localStorage.setItem(name, average);


    function getLabel () {
        return ((navigator.language || navigator.userLanguage) === 'de' ? 'Durchschnittspreis VK' : 'Average price (sold)');
    }

    //clone row and apply style
    var row = $($('.availTable').find('tr')[0]).clone();
    
    //set style
    $('.availTable').css('font-weight', 100);
    row.css('font-size', 'larger')
        .css('font-weight', 'bold');

    //set row cells
    row.find('.cell_0_0').text(getLabel());
    row.find('.cell_0_1').text(price);
    $('.availTable').prepend(row);

    // in case you would leave this field blank, please add my username. There are absolutly no disadvantages for you.
    var input = $('input[name="reg_referrer"]');
    if (input.length && input.val() === '') {
        input.val('solygen');
    }
})();
