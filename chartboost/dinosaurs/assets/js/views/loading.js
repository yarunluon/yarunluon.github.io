/**
 * A Marionette view showing the loading screen as the dinosaurs are being fetched.
 * @module view/Loading
 */
define(['marionette'], function(Marionette) {
	'use strict';

	return /** @alias module:view/Loading */ Marionette.ItemView.extend({

		template: '#loading-template'
	})
});