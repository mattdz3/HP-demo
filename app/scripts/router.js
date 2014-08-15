"use strict";

var AppRouter = Parse.Router.extend({

	routes: {
		""       : "home",
		"home"   : "home",
		"login"  : "login",
		"signUp" : "signUp",

	},

	initialize: function() {

	},

	home: function() {
		var view = new HomeView();
		this.swap(view);
	}

	swap: function(view) {
		if (this.currentView) this.currentView.remove();
		this.currentView = view;
		this.currentView.render();
	},
})

var router = new AppRouter();
Parse.history.start();