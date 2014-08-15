"use strict"; 

var HomeView = parse.View.extend({
	
	template: _.template($('.home-temp').text()),

	events: {

	},

	initialize: function() {
		$('.home-container').append(this.el)
		this.render();
	},

	render: function() {
		var renderTemp = this.template(this.model)
		this.$el.html(renderTemp);
		return this;
	},
})