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
    }
});
