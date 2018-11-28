define(['Et','text!wode.html'],function(Et,wodeHTML){
    var obj = {
        initView: function(){
            var app = document.getElementById("app");
            app.innerHTML = wodeHTML;
        }
    }
    return obj;
})