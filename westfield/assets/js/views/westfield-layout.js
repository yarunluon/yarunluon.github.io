/**
 * A Marionette Layout representing the layout of the Deals page.
 * @module view/WestfieldLayout
 */
define(['marionette'], function(Marionette) {
	return /** @alias module:view/WestfieldLayout */ Marionette.LayoutView.extend({
		el: '#root-view',

		regions: {
			banner: '#banner-region',
			nav: '#nav-region',
			search: '#search-region',
			centres: '#centres-region',
			deals: '#deals-region',
			message: '#message'
		}
	});
});
