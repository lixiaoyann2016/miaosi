var tplMy = require('../templates/my.string');

SPA.defineView('my',{
	html: tplMy,
	plugins: ['delegated'],
	bindActions: {		
		'goto.login': function(){
//			console.log(1);
			SPA.open('login');
		}
		
	}
	
	
})
