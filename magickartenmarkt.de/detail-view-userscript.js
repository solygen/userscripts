// ==UserScript==
// @name	magiccardmarket.eu / magickartenmarkt.de (mkm) average card price (sold)
// @version	0.0.1
// @namespace	https://github.com/solygen/userscripts-and-bookmarklets
// @repository	https://github.com/solygen/userscripts-and-bookmarklets.git
// @include	https://www.magickartenmarkt.de/*.prod
// @include	https://www.magiccardmarket.eu/*.prod
// @include	https://fr.magiccardmarket.eu/*.prod
// @include	https://es.magiccardmarket.eu/*.prod
// @include	https://id.magiccardmarket.eu/*.prod
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
// @license	MIT

// ==/UserScript==

//get chart node
var tmp = $($.parseHTML($('embed').attr('flashvars').split('dataXML=').splice(1,1)[0])).find('line');
        
//extract data
var start = tmp.attr('startvalue'),
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
row.find('.cell_0_0').text('Durchschnittspreis VK');
$('.availTable').prepend(row);
