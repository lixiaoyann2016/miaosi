var tplLogin = require('../templates/login.string');


SPA.defineView('login',{
	html: tplLogin,
	plugins: ['delegated'],
	bindActions: {		
		'close.login': function(e,data){
			this.hide('login')
		}
		
	}
})