/**
 * A Marionette ItemView representing a banner. The banner shows the Westfield Logo and a text that says "Deals"
 * @module view/Banner
 */
define(['marionette'], function(Marionette) {
	'use strict';

	return /** @alias module:model/Deals */ Marionette.ItemView.extend({
		template: '#banner-template'
	});
});