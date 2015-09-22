/**
 * A Marionette view that allows users to select a period.
 * @module view/Nav
 */
define(['marionette'], function(Marionette) {
	'use strict';

	return /** @alias module:view:Nav */ Marionette.ItemView.extend({
		template: '#nav-template',

		ui: {
			select: 'select'
		},

		events: {
			'change @ui.select': 'onSelectOption'
		},

		initialize: function(options) {
			this.globalCh = Backbone.Wreqr.radio.channel('global');
		},

		/**
		* Sends a message that a specific period was selected.
		*/
		onSelectOption: function(e) {
			var period = e.target.value;
			this.globalCh.vent.trigger('select:period', period);
		}
	});
});