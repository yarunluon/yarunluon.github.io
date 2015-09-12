/**
 * A Marionette ItemView representing a Tab.
 * @module view/Tab
 */
define(['marionette'], function(Marionette) {
	'use strict';

	return /** @alias module:view/Tab */ Marionette.ItemView.extend({
		template: '#tab-item-template',

		tagName: 'li',

		attributes: {
			role: 'presentation'
		},

		initialize: function(options) {
			this.globalCh = Backbone.Wreqr.radio.channel('global');

			// Update the tab once the centres are drawn
			this.listenTo(this.globalCh.vent, 'render:centres', this.updateStatus);
		},

		ui: {
			tab: '.tab'
		},

		events: {
			'click @ui.tab': 'onClickTab'
		},

		/** Tells the world a tab was clicked */
		onClickTab: function(e) {
			
			this.globalCh.vent.trigger('click:tab', this.model.id);
		},

		/** Determines if the tab was selected or not */
		updateStatus: function(id) {
			if (this.model.id === id) {
				this.$el.addClass('active');
			} else {
				this.$el.removeClass('active');
			}
		}
	});
})