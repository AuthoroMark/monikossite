
function main(){
    //-----------------------------menu scroll--------------------------------------------//

    $('.main-list a').click(function () {
        var targetId = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(targetId).offset().top-63
        }, 800);
    });

    //-------------------------contact toggle -------------------------------------------------------------------//

    $('.contact-btn').click(function () {
        // $('form').toggleClass('active');
        $('form').toggleClass('active'); //demonstracijai reikia padaryt toggle class form-active
        $('header').toggleClass('fixed');

    });

    $('.btn-close').click(function () {
        $('form').removeClass('active');
        $('header').removeClass('fixed');
    });

    //---------------------------------slider---------------------------------------------------------------------//

    $('.arrow-next').click(function () {
        var currentSlide = $('.slide-active');
        var nextSlide = currentSlide.next();

        if(nextSlide.length === 0){
            nextSlide = $('.slide').first();
        }

        currentSlide.fadeOut(1000).removeClass('slide-active');
        nextSlide.fadeIn(1000).addClass('slide-active');
    });

    $('.arrow-prev').click(function () {
        var currentSlide = $('.slide-active');
        var prevSlide = currentSlide.prev();

        if(prevSlide.length === 0){
            prevSlide = $('.slide').last();
        }

        currentSlide.fadeOut(1000).removeClass('slide-active');
        prevSlide.fadeIn(1000).addClass('slide-active');
    });



    // --------------------------------------------------elephant walking --------------------------------------------


        var $mouseX =0, $mouseY = 0;
        var $xp = 0, $yp =0;

        $(document).mousemove(function (e) {
            $mouseX = e.pageX;
            $mouseY = e.pageY;
        });

        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > 1800) {
                var $loop = setInterval(function () {
                    $xp += (($mouseX - $xp)/6);
                    $yp += (($mouseY - $yp- $(window).scrollTop())/6);
                    $(".ele-wrapper").css({left: $xp - 300 +'px', top: $yp - 200 + 'px'});
                }, 10);
            };
        });


};

$(document).ready(main);

