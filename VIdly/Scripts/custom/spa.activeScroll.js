var isAnimating = false,
    obj = {
        classes: {
            containerDiv: '.js-spa-container div',
            menu: '.js-spa-menu',
            menuListItem: '.js-spa-menu li',
            menuListItemLink: '.js-spa-menu li a',
            menuActive: 'active',
            menuFixed: 'fixed',
            menuListItemActive: '.js-spa-menu li.active',
            menuListItemFirst: '.js-spa-menu li:first'
    },
    actions: {
        click: 'click'        
    },
    data: {
        scroll: 'scroll',
        anchor: 'anchor'
    }
};

$(obj.classes.menuListItemLink).on(obj.actions.click, function () {

    isAnimating = true;

    var scrollAnchor = $(this).data(obj.data.scroll),
        scrollPoint = $('div[data-anchor="' + scrollAnchor + '"]').offset().top - 58; //28

    $('body,html').animate(
        {
            scrollTop: scrollPoint
                    },
                    500,
                    function() {
                        isAnimating = false;
                    });

    $(obj.classes.menuListItem).removeClass(obj.classes.menuActive);
    $(this).parent().addClass(obj.classes.menuActive);

            return false;

        });


$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 48) { //100
    	$(obj.classes.menu).addClass(obj.classes.menuFixed);
    	$(obj.classes.containerDiv).each(function (i) {
            if ($(this).position().top <= windscroll - 45) {    //60

            if (!isAnimating) {
                $(obj.classes.menuListItemActive).removeClass(obj.classes.menuActive);
                $(obj.classes.menuListItem).eq(i).addClass(obj.classes.menuActive);
            }
            }
        });

    } else {

        $(obj.classes.menu).removeClass(obj.classes.menuFixed);
        $(obj.classes.menuListItemActive).removeClass(obj.classes.menuActive);
        $(obj.classes.menuListItemFirst).addClass(obj.classes.menuActive);
    }

}).scroll();

function initModule(opts) {
    // TODO: initialise the options here (if to be used for more than one form)
}
