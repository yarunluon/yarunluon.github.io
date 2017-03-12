/**
 * A Marionette ItemView representing a Deal.
 * @module view/Deal
 */
define(['marionette', 'moment'], function(Marionette, moment) {
	'use strict';

	return /** @alias module:view/Deal */ Marionette.ItemView.extend({
		template: "#deal-item-template",

		tagName: 'li',

		className: 'list-group-item',

		attributes: {
			role: 'presentation'
		},

		ui: {
			deal: 'a'
		},

		events: {
			'focusin @ui.deal': 'onFocusInDeal',
			'focusout @ui.deal': 'onFocusOutDeal'
		},

		initialize: function(option) {
			this.globalCh = Backbone.Wreqr.radio.channel('global');
		},

		/**
		* Returns helper functions to format the date.
		* Easier to put logic in the view than in the template.
		*/
		templateHelpers: function() {
			// Format the date
			var locale = this.globalCh.reqres.request('locale');
			var toLocaleDate = function(dateStr) {
				return moment(dateStr).locale(locale).format('l');
			}

			return {
				getAvailableFromLocale: function() {
					return toLocaleDate(this.available_from);
				},

				getAvailableToLocale: function() {
					return toLocaleDate(this.available_to);
				},

				getLogoHref: function() {
					// Force use of https
					return this._links.retailer_logo.href.replace('http:', 'https:');
				}
			}
		},

		/** Adds a class to indicate the deal is in focus */
		onFocusInDeal: function() {
			this.$el.addClass('focus');
		},

		/** Removes a class to indicate the deal is out of focus */
		onFocusOutDeal: function() {
			this.$el.removeClass('focus');
		}
	});
})
