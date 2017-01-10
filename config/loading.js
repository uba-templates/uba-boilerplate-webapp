define(['jquery'], function($) {
    return function() {
        /**统一设置ajax的参数信息，发送信息前加载 loading 图标，请求完成后去掉 loading进度条图片 */
        $.ajaxSetup({
            beforeSend: function(xhr) {
                var centerContent = '<i class="uf uf-fluffycloudsilhouette u-loader-centerContent"></i>';
                var opt1 = {
                    hasback: true,
                    hasDesc: true, //是否含有加载内容描述
                    centerContent: centerContent
                };
                u.showLoader(opt1);
            },
            complete: function(xhr, status) {
                setTimeout("u.hideLoader({hasback:true});", 200);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) { //对错误进行统一处理
                var info = '';
                if (XMLHttpRequest.readyState == 0) {
                    info = '请求超时' + XMLHttpRequest.responseText;
                } else {
                    info = '请求异常，请检查。' + XMLHttpRequest.responseText;
                }
                u.messageDialog({
                    msg: info,
                    title: '请求错误',
                    btnText: '确定'
                });
            }
        });
    }
});
