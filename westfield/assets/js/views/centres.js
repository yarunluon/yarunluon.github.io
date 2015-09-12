/**
 * A Marionette CollectionView representing a Centres. Contains {@link module:view/Centre}
 * @module view/Centres
 */
define(['marionette', 'views/centre'], function(Marionette, Centre) {
	'use strict';

	return /** @alias module:view/Centres */ Marionette.CollectionView.extend({
		childView: Centre,

		initialize: function(options) {
			this.globalCh = Backbone.Wreqr.radio.channel('global');
		},

		onRender: function() {
			// All the centres are done rendering
			this.globalCh.vent.trigger('render:centres', this.collection.state);
		}
	});
})