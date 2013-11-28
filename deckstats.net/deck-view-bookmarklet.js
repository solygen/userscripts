(function() {
    var RARE = 'rgb(196, 159, 39)', UNCOMMON = 'rgb(119, 119, 119)', COMMON = 'rgb(0, 0, 0)';
    
    var cards = $('.cardtable').find('tr.deck_card'),
        proxies = [], 
        types = {rare: [], uncommon: [], common: []};

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
            $(row.find('.hbtronix_icon')[0]).prop('src', 'http://i.hbtronix.de/picture_empty.png');
            comment.length === 1 ? proxies.push(comment + ' ' + name) : proxies.push(num + ' ' + name);
        }
            
        //reorder edition
        var span = $($(row.find('.info_link'))[0]).find('span').remove(),
            leg = $($(row.find('.info_link'))[0]).text().trim().replace('(', '').replace(')', '').trim(),
            cell = $($(row.find('.info_link'))[0]);
        
        if (span.css('color') === RARE)
            types.rare.push(num + ' ' + name);
        if (span.css('color') === UNCOMMON)
            types.uncommon.push(num + ' ' + name);
        if (span.css('color') === COMMON)
            types.common.push(num + ' ' + name);
        
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
        proxies.sort(function (a, b) {
            return a.substr(2,1).charCodeAt(0) - b.substr(2,1).charCodeAt(0);
        });
        $('.custom').remove();
        var node = $($('div.ui-widget')[1]).clone();
        //set content
        $(node.find('p')[0]).empty()
                            .append(proxies.join('<br>'));
        //remove title and add bottom margin
        node.attr('title', '')
            .css('margin', '1em .5em');
        //prepend to main container
        $('.inhalt').prepend(node.addClass('custom'));
    }
    
    //list view sort by name
    $('.decks_list.decks_list_narrow').find('.decks_list_subtitle').remove();
    var lines = $('.decks_list.decks_list_narrow').find('tr').remove();
    lines.sort(function (a, b) {
        var valueA = $(a).find('a').text().trim(),
            valueB = $(b).find('a').text().trim();
        if(valueA < valueB) return -1;
        if(valueA > valueB) return 1;
        return 0;
    });
    $('.decks_list.decks_list_narrow').find('tbody').append(lines);
    
    //types
    console.log(types);
    
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

