require.config({
    paths: {
        swiper: "libs/swiper.min"
    }
})
define(['axios','Et','text!focus.html','swiper'],
    function(axios,Et,focusHTML,Swiper){
     var obj = {
        //  http://localhost:3000/zh-cn/api/focus
         initView: function(){
             var focusURL = "http://localhost:3000/zh-cn/api/focus";
             axios.get(focusURL).then((resp)=>{
                console.log(resp);
                // 将focus的图片数据和获取的focusHtml结合,渲染成一个页面
                var rs = Et.template(focusHTML,{focus:resp.focus});
                var focusEle = document.createElement("div");
                focusEle.className ="focus";
                focusEle.innerHTML = rs;
                // console.log(rs)
                var sy = document.getElementById("shouye");
                sy.appendChild(focusEle);
                var swiper = new Swiper('.swiper-container', {
                    spaceBetween: 1,
                    centeredSlides: true,
                    autoplay: {
                      delay: 2500,
                      disableOnInteraction: false,
                    },
                    pagination: {
                      el: '.swiper-pagination',
                      clickable: true,
                    },
                    navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    },
                  });
             })
         }
     }
     return obj;
})