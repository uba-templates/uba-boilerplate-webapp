require.config({
    baseUrl: ".",
    paths: {
        text: "vendor/requirejs/text",
        css: "vendor/requirejs/css",
        jquery: "vendor/jquery/jquery-1.11.2",
        bootstrap: 'vendor/bootstrap/js/bootstrap',
        knockout: "vendor/knockout/knockout-3.2.0.debug",
        uui: "vendor/uui/js/u",
        uuigrid: "vendor/uui/js/u-grid",
        uuitree: "vendor/uui/js/u-tree",
        director: "vendor/director/director",
        biz: "vendor/uui/js/u.biz",
        pages: "pages",
        scrollbarmin: "vendor/jquery.mCustomScrollbar.concat",
        baseConfig: "config/baseConfig",
        initPage: "config/initPage",
        addRouter: "config/addRouter",
        slideBar: "config/slideBar",
        loading: "config/loading"
    },
    shim: {
        'uui': {
            deps: ["knockout"]
        },
        'uuigrid': {
            deps: ["uui", "css!vendor/uui/css/grid.css"]
        },
        'bootstrap': {
            deps: ["jquery"]
        },
        'uuitree': {
            deps: ["uui", "css!vendor/uui/css/tree.css"]
        }
    }
});
require(['jquery', 'knockout', 'director', 'baseConfig', 'addRouter'], function(jQuery, ko, director, baseConfig) {
    window.router = Router();
    window.ko = ko;
    baseConfig.init();
});
