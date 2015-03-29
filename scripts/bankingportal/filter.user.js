// ==UserScript==
// @name         Bankingportal german sparkasse
// @description  filter 'umsatzliste' by substring in 'verwendungszweck'
// @version      1.0.0
// @grant        none
// @icon         http://www.google.com/s2/favicons?domain=www.sparkasse.de
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
//
// @include      https://bankingportal.sparkasse-*/portal/portal/*
//
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts/bankingportal/filter.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts/bankingportal/filter.user.js
// @homepage     https://github.com/solygen/userscripts

// ==/UserScript==


(function () {

    var table = $('.table_umsatzabfrage'),
        rows, field, block;

    if (!table.length) return;

    if (table.find('.block_custom').length) return;

    // get rows
    rows = table.find('.tablerowodd, .tableroweven');

    // add search field to dom
    block = $('<div class="block block_custom">').append(
        $('<div class="bline">')
            .append(
                field = $('<input type="text" placeholder="Filter" style="width: 100%">')
            )
    );
    block.insertBefore('.table_umsatzabfrage');

    // filter rows
    function filter (val, index, row) {
        var text = $($(row).find('td')[2]).contents().text().replace(/\s/g, '').toLowerCase();
        if (text.indexOf(val) < 0) {
            $(row).hide();
        }
    }

    // listener
    field.on('keyup', function () {
        var val = $(this).val().toLowerCase();
        // reset
        rows.show();
        // filter
        $.each(rows, filter.bind(this, val));
    });

})();
