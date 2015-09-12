/**
 * A Marionette ItemView representing a Centre.
 * @module view/Centre
 */
define(['marionette'], function(Marionette) {
	'use strict';

	return /** @alias module:view/Centre */ Marionette.ItemView.extend({
		template: "#centre-item-template",

		className: 'panel panel-default',

		initialize: function(options) {
			this.globalCh = Backbone.Wreqr.radio.channel('global');

			// Update the centre once the deals are rendered
			this.listenTo(this.globalCh.vent, 'render:deals', this.updateStatus);
		},

		ui: {
			centre: '.centre a'
		},

		events: {
			'click @ui.centre': 'onClickCentre'
		},

		/** 
		* Sends an event whether the Centre view is opening or closing
		*/
		onClickCentre: function(e) {
			if (this.$el.hasClass('active')) {
				// Close centre
				this.$el.removeClass('active');
				this.globalCh.vent.trigger('close:centre', this.model.id);
			} else {
				// Open centre
				this.globalCh.vent.trigger('open:centre', this.model.id);	
			}
		},

		/** 
		* Determines if the centre was selected or not
		*/
		updateStatus: function(id) {
			if (this.model.id === id) {
				this.$el.addClass('active');
			} else {
				this.$el.removeClass('active');
			}
		}
	});
});