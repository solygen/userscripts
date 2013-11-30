(function() {
    //load jquery
    var script = document.createElement('script'), done;
    script.src = "//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js";
    document.head.appendChild(script);

    script.onload = script.onreadystatechange = function(){
        if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
            done = true
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
        }
    };
})();
