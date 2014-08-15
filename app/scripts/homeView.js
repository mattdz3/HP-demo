"use strict"; 

var HomeView = Parse.View.extend({
	
	template: _.template($('.home-temp').text()),

	events: {
		"click .patient-button" : "displayLogin",
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

	displayLogin: function() {
		$('.login-view').html('');
		$('.main').hide();
		$('.button-row').hide();
		new LoginView();
	},
})

