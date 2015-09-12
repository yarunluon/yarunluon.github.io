/**
 * A Marionette ItemView representing a Search.
 * @module view/Search
 */
define(['marionette'], function(Marionette) {
	'use strict';

	return /** @alias module:view/Search */ Marionette.ItemView.extend({
		template: '#search-template',

		ui: {
			search: '#search-input'
		},


		events: {
			'focusin @ui.search': 'onFocusInSearch',
			'focusout @ui.search': 'onFocusOutSearch'
		},

		/** Adds a class to indicate the search is in focus */
		onFocusInSearch: function() {
			this.$el.find('.input-group').addClass('focus');
		},

		/** Removes a class to indicate the deal is out of focus */
		onFocusOutSearch: function() {
			this.$el.find('.input-group').removeClass('focus');
		}
	});
});