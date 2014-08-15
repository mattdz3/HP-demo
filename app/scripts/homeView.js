"use strict"; 

var HomeView = Parse.View.extend({
	
	template: _.template($('.home-temp').text()),

	events: {
		"click .patient-button"  : "patientLogin",
		"click .provider-button" : "providerLogin",
		"click .before-visit"    : "beforeView",
 	},

	initialize: function() {
		$('.home-view').append(this.el)
		this.render();
	},

	render: function() {
		var renderTemp = this.template(this.model)
		this.$el.html(renderTemp);
		return this;
	},

	patientLogin: function() {
		$('.login-view').html('');
		$('.main').hide();
		$('.button-row').hide();
		new LoginView();
	},

	providerLogin: function() {
		$('.login-view').html('');
		$('.main').hide();
		$('.button-row').hide();
		new ProviderLoginView();
	},

	beforeView: function() {
		$('.features').html('');
		$('.main').hide();
		$('.button-row').hide();
		new BeforeVisitView();
	}
})

