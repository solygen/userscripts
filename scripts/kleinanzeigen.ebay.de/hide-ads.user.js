// ==UserScript==
// @name         hide ads and show relative times
// @description  kleinanzeigen.ebay.de
// @version      0.0.1
// @icon         http://www.google.com/s2/favicons?domain=kleinanzeigen.ebay.de
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
//
// @include      http://kleinanzeigen.ebay.de/*

// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
// @require      http://cdnjs.cloudflare.com/ajax/libs/moment.js/2.8.2/moment-with-locales.min.js
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts/kleinanzeigen.ebay.de/hide-ads.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts/kleinanzeigen.ebay.de/hide-ads.user.js
// @homepage     https://github.com/solygen/userscripts

// ==/UserScript==

(function () {

    'use strict';

    // hide adds
    $('#srp_adsense-top, #srp_adsense-middle, #srp_adsense-bottom, #srchrslt-adtable-topads').remove();

    // replace concrete day with relative on detail view
    if ($('.viewad-tab-section')) {
        var node = $($('.viewad-tab-section').find('dl').children()[3]),
            mom = moment(node.text(), 'DD.MM.YYYY').lang('de');
        node.text(mom.fromNow(true));
    }

    // replace concrete day with relative on list view
    if ($('.ad-listitem-addon')) {
        var nodes = $('.ad-listitem-addon');
        $.each(nodes, function (index, node) {
            node = $(node);
            var val = node.text().trim(), mom;
            // ignore 'heute, gestern'
            if (val.indexOf('G') !== 0 && val.indexOf('H') !== 0) {
                mom = moment(val, 'DD.MM.YYYY');
            } else {
                mom = val.indexOf('G') === 0 ? moment().add('d', -1) : moment();
                var parts = val.split(',')[1].split(':');
                mom.set('hour', parts[0]);
                mom.set('minute', parts[1]);
                // green
                node.css('color', val.indexOf('G') === 0 ? undefined : '#5cb85c');
            }
            node.text(mom.lang('de').fromNow(true));
        });
    }
})();
