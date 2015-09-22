/**
 * A Marionette LayoutView to manage the different regions of the app.
 * @module view/DinosaurLayout
 */
define(['marionette'], function(Marionette) {
	'use strict';

	return /** @alias module:view/DinosaurLayout */ Marionette.LayoutView.extend({
		el: '#root-view',

		regions: {
			banner: '#banner-region',
			nav: '#nav-region',
			display: '#display-region'
		}
	});
});