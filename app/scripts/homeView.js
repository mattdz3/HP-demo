"use strict"; 

var HomeView = Parse.View.extend({
	
	template: _.template($('.home-temp').text()),

	initialize: function() {
		$('.home-view').append(this.el)
		this.render();
	},

	render: function() {
		var renderTemp = this.template(this.model)
		this.$el.html(renderTemp);
		return this;
	},
})

