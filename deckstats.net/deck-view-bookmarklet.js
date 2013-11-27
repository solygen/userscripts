(function() {
    var cards = $('.cardtable').find('tr.deck_card'),
        proxies = [];

    for (var i = 0; i < cards.length; i++) {
        var row = $(cards[i]),
            price = $(row.find('.card_price')[0]).text().trim().replace('\u20AC',''),
            num = $(row.find('.card_amount')[0]).text().trim(),
            name = $(row.find('a')[0]).text().trim(),
            each = (price/num).toFixed(2),
            comment =  $(row.find('.hbtronix_icon')[0]).attr('title');
        //replace us price
        $(row.find('.card_price')[1]).text(each + ' \u20AC');
        //log proxies
        if (comment && (comment.length === 1 || comment === 'proxy')) {
            comment.length === 1 ? proxies.push(comment + ' ' + name) : proxies.push(num + ' ' + name);
        }
            
        //reorder edition
        var span = $($(row.find('.info_link'))[0]).find('span').remove(),
            leg = $($(row.find('.info_link'))[0]).text().trim().replace('(', '').replace(')', '').trim(),
            cell = $($(row.find('.info_link'))[0]);
        span.text(span.text().trim());
        cell.text(leg + ' (')
            .append(span)
            .append(')');
        //replace link
        // var href = $(row.find('.cardlink')).attr('href');
        // href = href.replace('http://www.mtg-forum.de/db/magiccard.php?lng=de&card=', 'http://magiccards.info/query?q=');
        // $(row.find('.cardlink')).attr('href', href);
    }
    //remove flag and sum
    $($('.cardtable').find('.card_price.header')[1]).empty();
    $($('.cardtable').find('.deck_footer').find('.card_price')[1]).empty()
    
    //write proxie block
    if (proxies.length) {
        $('.custom').remove();
        var node = $($('div.ui-widget')[1]).clone();
        //set content
        $(node.find('p')[0]).empty()
                            .append(proxies.sort().join('<br>'));
        //remove title and add bottom margin
        node.attr('title', '')
            .css('margin', '1em .5em');
        //prepend to main container
        $('.inhalt').prepend(node.addClass('custom'));
    }
    
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

