(function() {
    var cards = $('.cardtable').find('tr.deck_card');

    for (var i = 0; i < cards.length; i++) {
        var row = $(cards[i]),
            price = $(row.find('.card_price')[0]).text().trim().replace('\u20AC',''),
            num = $(row.find('.card_amount')[0]).text().trim(),
            name = $(row.find('a')[0]).text().trim(),
            each = (price/num).toFixed(2);
        //replace us price
        $(row.find('.card_price')[1]).text(each + ' \u20AC');
        //replace link
        // var href = $(row.find('.cardlink')).attr('href');
        // href = href.replace('http://www.mtg-forum.de/db/magiccard.php?lng=de&card=', 'http://magiccards.info/query?q=');
        // $(row.find('.cardlink')).attr('href', href);
    }
})();

