/**
 * A Marionette view showing a single dinosaur.
 * @module view/Dinosaur
 */
define(['marionette'], function(Marionette) {
	'use strict';

	return /** @alias module:view/Dinosaur */ Marionette.ItemView.extend({

		className: 'dino-panel-container',

		template: '#dinosaur-template'
	});
});