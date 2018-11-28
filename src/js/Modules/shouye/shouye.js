require.config({
    paths: {
        focus: 'Modules/shouye/focus/focus',
        navBar: 'Modules/shouye/navbar/navbar'
    }
})
define(['Et','text!shouye.html','focus','navBar'],function(Et,shouyeHTML,focus,navBar){
    var obj = {
        initView: function(){
            var app = document.getElementById("app");
            app.innerHTML = shouyeHTML;
            //初始化轮播图
            focus.initView();
            navBar.initView();
        }
    }
    return obj;
})