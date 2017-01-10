define(['jquery'], function($) {
    return function() {
        var that = this;
        var _func = {
            // left nav shrink 收缩
            shrink: function() {
                $('.nav-li').addClass('live-hover');
                $('.foldingpad').addClass('rotate');
                // $('.nav-item-list').css('left','-180px');
                $('.page-container').css('margin-left', '55px');
                $('.foldingpad').css('left', '65px')
                $('.page-sidebar').css('margin-left', '-200px');
                $('.page-small-sidebar').css('margin-left', '0px');
                $('.global-notice').css('left', '90px')
                // setCookie('menu','2');
            },
            // left nav unfold 展开
            unfold: function() {
                $('.nav-li').removeClass('live-hover');
                $('.foldingpad').removeClass('rotate');
                // $('.nav-item-list').css('left','75px');
                $('.page-container').css('margin-left', '200px');
                $('.page-sidebar').css('margin-left', '0px');
                $('.page-small-sidebar').css('margin-left', '-55px');
                $('.global-notice').css('left', '235px');
                $('.foldingpad').css('left', '210px');
            }
        }
        //切换slideBar
        $('.foldingpad').click(function() {
            if ($(this).hasClass('rotate')) {
                _func.unfold(); //展开
            } else {
                _func.shrink();
            }
        });


    }
});
