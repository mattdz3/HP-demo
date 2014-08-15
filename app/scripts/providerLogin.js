"use strict";

var ProviderLoginView = Parse.View.extend({

	template: _.template($('.provider-login-temp').text()),

	initialize: function() {
		$('.login-view').append(this.el)
		this.render();
	},

	render: function() {
		var renderTemp = this.template(this.model)
		this.$el.html(renderTemp);
		return this;
	},

})