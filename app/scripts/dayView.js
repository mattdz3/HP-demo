"use strict";

var DayView = Parse.View.extend({
	
	template: _.template($('.day-temp').text()),

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