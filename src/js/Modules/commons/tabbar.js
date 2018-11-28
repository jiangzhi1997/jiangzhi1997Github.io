require.config({
    paths: {
        shouye: 'Modules/shouye/shouye',
        fenlei: 'Modules/fenlei/fenlei',
        wode: 'Modules/wode/wode'
    }
})
define(['Et','text!tabbar.html','shouye','fenlei','wode'],
    function(Et,tabbarHTML,shouye,fenlei,wode){
    var tabbar = {
        initView: function(){
            Et.enableStyle = true;//启动模板写样式的功能
            var rs = Et.template(tabbarHTML,{})//渲染模板
            var body = document.body;
            body.innerHTML += rs;//将得到的页面代码添加到body上
            var tabs = document.querySelectorAll(".tabs"); //获取页面上所有的tabs按钮
            shouye.initView();
            for(let i=0;i<tabs.length;i++){
                var tab = tabs[i];
                // 为每一个tab添加点击事件
                tab.onclick = function(){
                    switch(i){
                        case 0: 
                            shouye.initView();
                            break;
                        case 1: 
                            fenlei.initView();
                            break;
                        case 2: 
                            wode.initView();
                            break;
                    }
                }
            }
        }
    }
    return tabbar;
})