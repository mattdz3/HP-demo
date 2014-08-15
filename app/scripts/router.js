"use strict";

var AppRouter = Parse.Router.extend({

	routes: {
		""              : "home",
		"home"          : "home",
		"patientlogin"  : "patientlogin",
		"providerlogin" : "providerlogin",
		"before"        : "before", 
		"signUp"        : "signUp",
	},

	initialize: function(options) {
		this.currentView = null;
	},

	home: function() {
		var view = new HomeView();
		this.swap(view);
	},

	patientlogin: function() {
		var view = new LoginView();
		this.swap(view);
	},

	providerlogin: function() {
		var view = new ProviderLoginView();
		this.swap(view);
	},

	before: function() {
		var view = new BeforeVisitView();
		this.swap(view);
	},

	swap: function(view) {
		if (this.currentView) this.currentView.remove();
		this.currentView = view;
		this.currentView.render();
	},
})

var router = new AppRouter();
Parse.history.start();