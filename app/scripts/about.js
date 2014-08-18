"use strict"; 

var AboutView = Parse.View.extend({
	
	template: _.template($('.about-temp').text()),

	initialize: function() {
		$('.features').append(this.el)
		this.render();
	},

	render: function() {
		var renderTemp = this.template(this.model)
		this.$el.html(renderTemp);
		return this;
	},
})

