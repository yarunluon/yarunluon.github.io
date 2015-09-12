/**
 * A Marionette ItemView representing a NoDeals. Shown when there are no deals for a centre.
 * @module view/NoDeals
 */
define(['marionette'], function(Marionette) {
	'use strict';
	
	return /** @alias module:view/NoDeals */ Marionette.ItemView.extend({
		template: '#no-deals-template',

		className: 'no-deals'
	})
});