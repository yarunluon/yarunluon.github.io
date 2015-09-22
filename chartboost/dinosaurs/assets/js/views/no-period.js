/**
 * A Marionette view saying no period was selected. 
 * @module view/NoPeriod
 */
define(['marionette'], function(Marionette) {
	'use strict';

	return /** @alias module:view/NoPeriod */ Marionette.ItemView.extend({

		template: '#no-period-template'
	});
});
