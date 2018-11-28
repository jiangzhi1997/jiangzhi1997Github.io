require.config({
    baseUrl: './src/js',
    paths: {
        axios: 'utils/axios',
        tabbar: 'Modules/commons/tabbar',
        Et: 'libs/easy.templatejs',
        text:'libs/text'
    },
    map: {

    }
})

require(['tabbar','axios'],function(tabbar,axios){
    tabbar.initView();
    axios.get("http://localhost:3000/api/home",{pageSize:20,pageNo:1})
    .then((resp)=>{
        console.log(resp);
    })
})