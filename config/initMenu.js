define(function() {
    return function() {
        $('#menu > li').on("click", function() {
            $(this).addClass("specli").siblings().removeClass("specli");
            //$(this).addClass("specli").siblings().removeClass("specli");
            $("#nav-zone > li").eq($(this).index()).addClass("specli").siblings().removeClass("specli");
        });
        $("#nav-zone > li").on("click", function() {
            $(this).addClass("specli").siblings().removeClass("specli");
            //$(this).addClass("specli").siblings().removeClass("specli");
            $("#menu > li").eq($(this).index()).addClass("specli").siblings().removeClass("specli");
        });
        $('#menu').find("a[href*='#']").each(function(e) {
            var location = window.location.hash;
            if (location == $(this).attr('href')) {
                $(this).parents('li').addClass('specli').siblings().removeClass('specli');
                //console.log(location);
            }
        });
    }
});
