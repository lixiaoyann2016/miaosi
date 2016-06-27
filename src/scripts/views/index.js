var tplIndex = require('../templates/index.string');


//定义视图
SPA.defineView("index",{
	html: tplIndex,
	
	//定义子视图
	modules: [{
    name: 'content', // 子视图的名字，用作后边引用的句柄
    views: ['home','match','home','classify','my'], // 定义子视图的列表数组, 'search', 'my'
    defaultTag: 'home', // 定义默认视图
    container: '.container' // 子视图的容器
  }],
  
  //绑定事件的前提，载入插件列表
  plugins: ['delegated'],
  
  //绑定footer的切换事件
  bindActions: {
  	'class.tab': function(e,data){
  		//console.log(e);
		$(e.el).addClass('active').siblings().removeClass('active');
		
		//切换视图
		this.modules.content.launch(data.tag);
		console.log(data.tag);
  	}
  }
  
	
})

