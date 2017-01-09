require(['knockout', 'director', 'baseConfig', 'addRouter'], function(ko, director, baseConfig) {

    window.router = Router();
    window.ko = ko;
    baseConfig.init();


})
