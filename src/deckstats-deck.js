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
        //reorder edition
        var span = $($(row.find('.info_link'))[0]).find('span').remove();
        var leg = $($(row.find('.info_link'))[0]).text().trim().replace('(', '').replace(')', '');
        $($(row.find('.info_link'))[0]).text(leg + ', ');
        $($(row.find('.info_link'))[0]).append(span);
        //replace link
        // var href = $(row.find('.cardlink')).attr('href');
        // href = href.replace('http://www.mtg-forum.de/db/magiccard.php?lng=de&card=', 'http://magiccards.info/query?q=');
        // $(row.find('.cardlink')).attr('href', href);
    }
    //remove flag and sum
    $($('.cardtable').find('.card_price.header')[1]).empty();
    $($('.cardtable').find('.deck_footer').find('.card_price')[1]).empty()
    
    //bigger card preview 
    var id = setInterval(function() {
        $('#kartenOverlay')
            .css('border', '0px')
            .css('width', 'auto');
        $('#kartenOverlayBild')
            .css('height', '400px')
            .css('width', '280px');
        $('#kartenOverlayContent')
            .css('display', 'none');
        if($('#kartenOverlay').length)
            clearInterval(id);
        }, 1000);
})();

