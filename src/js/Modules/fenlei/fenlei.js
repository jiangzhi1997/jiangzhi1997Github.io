define(['Et','text!fenlei.html'],function(Et,fenleiHTML){
    var obj = {
        initView: function(){
            var app = document.getElementById("app");
            app.innerHTML = fenleiHTML;
        }
    }
    return obj;
})