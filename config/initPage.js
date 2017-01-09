define(['knockout'], function(ko) {
    return function(p, id) {
        var module = p;
        var truePath = p.substring(6);
        var aa = "a[href*='" + truePath + "']";
        $($('#menu,#nav-zone').find(aa)[0]).parent().addClass('specli');
        var content = document.getElementById("content");
        require([module], function(module) {
            ko.cleanNode(content);
            content.innerHTML = "";
            module.init(content);
        })
    }

});
