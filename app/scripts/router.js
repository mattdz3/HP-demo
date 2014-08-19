"use strict";

var AppRouter = Parse.Router.extend({

	routes: {
		""              : "home",
		"home"          : "home",
		"patientlogin"  : "patientlogin",
		"providerlogin" : "providerlogin",
		"before"        : "before", 
		"during"        : "during",
		"yourDay"       : "yourDay",
		"comm"          : "comm",
		"support"       : "support",
		"about"         : "about",
		"payment"       : "payment",
		"*actions"      : "default", 
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

	during: function() {
		var view = new DuringVisitView();
		this.swap(view);
	},

	yourDay: function() {
		var view = new DayView();
		this.swap(view);
	},

	comm: function() {
		var view = new CommunicationView();
		this.swap(view);
	},

	support: function() {
		var view = new SupportView();
		this.swap(view);
	},

	about: function() {
		var view = new AboutView();
		this.swap(view);
	},

	payment: function() {
		var view = new PayView();
		this.swap(view);
	},

	default: function() {
		var view = new HomeView();
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