define(['../router/routers'], function(routers) {
    var routes = {};
    return function() {
        routers.forEach(function(item, index, input) {
            var path = item.name;
            routes[path] = function() {
                var content = document.getElementById("content");
                var filePath = "pages" + path + '.js';
                requirejs.undef(filePath);
                require([filePath], function(module) {
                    ko.cleanNode(content);
                    content.innerHTML = "";
                    if (module.init) {
                        module.init(content);
                    } else {
                        module.default(content);
                    }
                })
            }
        });

        var router = Router(routes);
        router.init("#/mainPage/main");
        // $('#menu,#nav-zone').find("a[href*='#']").each(function(e) {
        //     var path = this.hash.replace('#', '');
        //     addRouter(path);
        //     var location = window.location.hash;
        //     if (location == $(this).attr('href')) {
        //         $(this).parents('li').addClass('specli').siblings().removeClass('specli')
        //     }
        // });
        // $('#nav-zone').find("a[href*='#']").each(function(e) {
        //     var location = window.location.hash;
        //     if (location == $(this).attr('href')) {
        //         $(this).parents('li').addClass('specli').siblings().removeClass('specli')
        //     }
        // });
        //
        // window.router.init();
        // if (window.location.href.indexOf("#") < 0) {
        //     window.router.setRoute($('#menu').find("a[href*='#']")[0].hash.replace('#', ''));
        // };
        //
        // $('#menu li').click(function(e) {
        //     //console.log($(e.target).parents('li'));
        //     var index = $(this).index();
        //     //console.log(index);
        //     $(e.target).parents('li').addClass('specli').siblings().removeClass('specli');
        //     /*收缩菜单同步改变*/
        //     $('#nav-zone li').eq(index).addClass('specli').siblings().removeClass('specli');
        //
        // });
        // $('#nav-zone li').click(function(e) {
        //     var index = $(this).index();
        //     //console.log(index);
        //     $(e.target).parents('li').addClass('specli').siblings().removeClass('specli');
        //     /*展开菜单同步改变*/
        //     $('#menu li').eq(index).addClass('specli').siblings().removeClass('specli');
        // });

    }
});
