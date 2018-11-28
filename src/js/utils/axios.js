define(function(){
    var axios = {
        get: function(url,params){
            // url?username=""&password=""
            var str = ""
            if(params){
                for(var key in params){
                    str += key+"="+params[key]+"&"
                }
            }
            str = str.slice(0,-1);
            url =url+"?"+str;
            console.log(url);
            // 发起网络请求
            var xhr = new XMLHttpRequest();
            xhr.open('get',url);
            xhr.send();
            return new Promise(function(resolve,reject){
                xhr.onreadystatechange = function(){
                    if(xhr.readyState != 4){
                        return;
                    }
                    // 等于200表示成功
                    if(xhr.status === 200){
                        var jsonData = JSON.parse(xhr.responseText);
                        resolve(jsonData);
                    }
                }
            })
        },
        post: function(url,params){
            // url = baseUrl + url;
            // xhr.open('post',url);
            // xhr.send(stringify(params));
            // return readyStatus();
        }
    }
    // 注册
    window.$axios = axios;
    return axios;
    
})
