// ==UserScript==
// @name         redirect: skip meta card page / skip search result page
// @description  https://github.com/solygen/userscripts/blob/master/doc/magickartenmarkt.de.md#redirectuserjs
// @version      1.0.1
// @grant        none
// @icon         https://www.magickartenmarkt.de/Products/Singles/Magic+2010/img/c0a10b062a8c3b48a5c29b779b3ac51e/static/misc/favicon-96x96.png
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
//
// @include      https://www.magickartenmarkt.de/Cards/*
// @include      https://www.magiccardmarket.eu/Cards/*
// @include      https://fr.magiccardmarket.eu/Cards/*
// @include      https://es.magiccardmarket.eu/Cards/*
// @include      https://id.magiccardmarket.eu/Cards/*
//
// @updateURL    https://raw.github.com/solygen/userscripts/master/scripts/magickartenmarkt.de/redirect.user.js
// @downloadURL  https://raw.github.com/solygen/userscripts/master/scripts/magickartenmarkt.de/redirect.user.js
// @homepage     https://github.com/solygen/userscripts
//
// ==/UserScript==

//redirect to first 'appears in' link (only used when link is called from a ressource that adds '&redirect=true' to url)
(function () {

    'use strict';
    if ($('.expansionIcon').length) {

        //metalink
        document.location = $('.expansionIcon').first().parent().attr('href');
            //$($('.standard_content').find('a')[1]).attr('href');
    } else if ($('.SearchTable').length) {

        //search result
        var list = $('.SearchTable tbody tr'),
            hash = {},
            i;

        for (i = list.length - 1; i >= 0; i--) {
            var tr = $(list[i]),
                card = $(tr.children().find('a')[0]).text();
            hash[card] = true;
        }

        //redirect if only one card is found
        if (Object.keys(hash).length === 1) {
            document.location = $($('.SearchTable').find('a')[1]).attr('href');
        }
    }

})();
