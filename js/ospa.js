$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}

$(['img/s-no-s.png', 'img/s-no.png', 'img/s-yes-s.png', 'img/s-yes.png', 'img/submenu-left.png', 'img/submenu-right.png']).preload();

$(document).ready(function() {
    if($('ol.poll').is('ol')) {
        $('ol.poll > li > a.s-yes').click(function(e) {
            e.preventDefault();
            $(this).nextAll('div.infobox').slideDown();
            $(this).removeClass('s-yes-ns').addClass('s-yes-s');
            $(this).next().removeClass('s-no-s').addClass('s-no-ns');
        });
        $('ol.poll > li > a.s-no').click(function(e) {
            e.preventDefault();
            $(this).nextAll('div.infobox').slideDown();
            $(this).removeClass('s-no-ns').addClass('s-no-s');
            $(this).prev().removeClass('s-no-s').addClass('s-yes-ns');
        });
    }
    
    $('#fontsize').click(function(e) {
        e.preventDefault();
        var fs = parseInt($('body').css('font-size'));
        if(fs == 12) {
            $('body').css('font-size', '16px');
            $(this).addClass('font-checked');
        } else {
            $('body').css('font-size', '12px');
            $(this).removeClass('font-checked');
        }
    });
    
    $('#printlink').click(function(e) {
        e.preventDefault();
        if($('#print').is('body')) {
            $('#print').attr('id', '');
        } else {
            $('body').attr('id', 'print');
        }
    });
    
    $(window).keyup(function(e) {
        if(e.keyCode == 27) {
            $('#print').attr('id', '');
        }
    });

    $('#tabs > li').mouseenter(function(e) {
        if($(this).children('div.submenu').is('div'))
            $(this).addClass('hover');
    }).mouseleave(function(e) {
        $(this).removeClass('hover');
    });

    $('#tabs > li > div.submenu').mouseenter(function(e) {
        $(this).parent().addClass('selected-hover');
    }).mouseleave(function(e) {
        $(this).parent().removeClass('selected-hover');
    });

});

