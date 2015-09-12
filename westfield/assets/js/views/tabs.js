/**
 * A Marionette CollectionView representing a Tabs. Contains {@link module:view/Tab}
 * @module view/Tabs
 */
define(['marionette', 'views/tab'], function(Marionette, Tab) {
	'use strict';

	return /** @alias module:view/Tabs */ Marionette.CollectionView.extend({
		tagName: 'ul',

		className: 'nav nav-tabs nav-justified',

		childView: Tab
	});
})