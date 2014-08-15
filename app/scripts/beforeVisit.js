"use strict"; 

var BeforeVisitView = Parse.View.extend({
	
	template: _.template($('.before-temp').text()),

	events: {

	},

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