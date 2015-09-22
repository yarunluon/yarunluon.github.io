/**
 * A Marionette view showing no dinosaurs were found. This view is shown for errors that are 404 or if no dinosaurs exist for that period.
 * @module view/NoDinosaurs
 */
define(['marionette'], function(Marionette) {
	'use strict';

	return /** @alias module:view/NoDinosaurs */ Marionette.ItemView.extend({

		template: '#no-dinosaurs-template'
	});
});