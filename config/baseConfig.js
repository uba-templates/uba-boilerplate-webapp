define(['jquery', 'knockout', 'initPage', 'slideBar', 'loading', 'initRouter', 'initMenu', 'uui', 'director'], function(jQuery, ko, initPage, slideBar, loading, initRouter, initMenu) {
    window.ctx = "http://localhost:8989";
    //u.js使用全局对象对外暴露
    window.ko = ko;
    return {
        //初始化相关模块
        init: function() {
            //ajax请求loading动画
            loading();
            //绑定slideBar
            slideBar();
            //取消ajax缓存
            $.ajaxSetup({
                cache: false
            });
            //初始化菜单栏
            initMenu();
            //初始化路由相关
            initRouter();
        }
    }
});
