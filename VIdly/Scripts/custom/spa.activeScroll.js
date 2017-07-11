var isAnimating = false;
$('.js-spa-menu li a').on('click', function () {

    $('.js-spa-menu li').removeClass('active');
    $(this).parent().addClass('active');

    isAnimating = true;

    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('div[data-anchor="' + scrollAnchor + '"]').offset().top - 58; //28

    $('body,html').animate(
        {
            scrollTop: scrollPoint
                    },
                    500,
                    function() {
                        isAnimating = false;
                    });

            return false;

        });


$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 48) { //100
    	$('.js-spa-menu').addClass('fixed');
    	$('.js-spa-container div').each(function (i) {
            if ($(this).position().top <= windscroll - 45) {    //60

            if (!isAnimating) {
            	$('.js-spa-menu li.active').removeClass('active');
            	$('.js-spa-menu li').eq(i).addClass('active');
            }
            }
        });

    } else {

    	$('.js-spa-menu').removeClass('fixed');
    	$('.js-spa-menu li.active').removeClass('active');
    	$('.js-spa-menu li:first').addClass('active');
    }

}).scroll();