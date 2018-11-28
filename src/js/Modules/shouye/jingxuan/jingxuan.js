define(['axios','Et','text!jingxuan.html'],
    function(axios,Et,jxHTML){
        // console.log(jxHTML);
        var obj = {
            initView:function(){
                var baseURL = "http://localhost:3000/api/home";
                var params = {
                    sectionId: 99,
                    pageNo: 0,
                    pageSize:20
                }
                axios.get(baseURL,params).then((resp)=>{
                    console.log(resp.listIndex);
                    var rs = Et.template(jxHTML,{
                                                    goods:resp.listIndex,
                                                    Date: window.Date,
                                                    console: window.console
                                                });
                    var goodsList = document.createElement("div");
                    goodsList.className = "goodsList"
                    goodsList.innerHTML = rs;
                    var shouye = document.getElementById("shouye");
                    shouye.appendChild(goodsList);
                })

            }
        }
    return obj;
})