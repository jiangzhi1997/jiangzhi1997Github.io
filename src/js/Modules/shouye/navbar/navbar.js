require.config({
    paths: {
        jingxuan: 'Modules/shouye/jingxuan/jingxuan',
        faxian: 'Modules/shouye/faxian/faxian',
        youhui: 'Modules/shouye/youhui/youhui',
        haitao: 'Modules/shouye/haitao/haitao',
        yuanchuang: 'Modules/shouye/yuanchuang/yuanchuang'
    }
})
define(['Et','text!./Modules/shouye/navbar/navbar.html','jingxuan','youhui','haitao','faxian','yuanchuang'],
    function(Et,navbarHTML,jingxuan,youhui,haitao,faxian,yuanchuang){
        console.log(jingxuan);
    var obj = {
        initView:function(){
            var shouye = document.getElementById("shouye");
            shouye.innerHTML += navbarHTML;
            var navTabs = document.querySelectorAll(".navTabs");
            jingxuan.initView();
            var length = navTabs.length;
            for(let i=0;i<length;i++){
                navTabs[i].onclick = function(){
                    switch(i){
                        case 0:
                            jingxuan.initView();
                            break;
                        case 1: 
                            youhui.initView();
                            break;
                        case 2: 
                            haitao.initView();
                            break;
                        case 3:
                            faxian.initView();
                            break;
                        case 4:
                            yuanchuang.initView();
                            break;
                    }
                }
            }
        }
    }
    return obj;
})