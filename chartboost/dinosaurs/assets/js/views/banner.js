/**
 * A Marionette view showing the logo and title.
 * @module model/Banner
 */
define(['marionette'], function(Marionette) {
	'use strict';

	return /** @alias module:view/Banner */ Marionette.ItemView.extend({

		template: '#banner-template'
	});
});