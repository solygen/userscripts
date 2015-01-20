// ==UserScript==
// @name         bricklink
// @description  extract prices as json to browser console
// @version      1.0.0
// @icon         http://www.google.com/s2/favicons?domain=www.bricklink.com
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
// @require      https://code.jquery.com/jquery-2.1.0.min.js
//
// @include     http://www.bricklink.com/catalogPG.asp?P=*
//


// ==/UserScript==

(function () {
    var rows = $($('table.fv')[7]).find('tr'),
        list = [];

    $.each(rows, function (index, row) {
        var childs = $(row).children(),
            seller_country = $($(childs[0]).find('img')[1]).attr('src'),
            quantity = parseInt($(childs[1]).text(), 10),
            unit_price = parseFloat($(childs[2]).text().replace('~EUR', ''), 10);

        //ignore headlines
        if (seller_country) {
            //get flag from filename
            seller_country = seller_country.split('/')[1].split('.')[0];
            //add to list
            list.push({
                quantity: quantity,
                unit_price: unit_price,
                seller_country: seller_country
            });
        }
    });

    console.log(JSON.stringify(list, 2, undefined));

})();
