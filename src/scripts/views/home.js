
var tplHome = require('../templates/home.string');

//定义视图
SPA.defineView("home",{
	html: tplHome,
	
	//安装插件
	plugins: ['delegated'],
	
	//初始化
	init: {
		homeSwiper: null,
	},
	
	//绑定事件
	bindEvents:{
		'show': function(){
			this.homeSwiper = new Swiper("#homeSwiper",{
				loop: false,
				pagination: '.swiper-pagination',
				autoplay: 2000,
			
			})
		}
		
	}
	
	
	
})
