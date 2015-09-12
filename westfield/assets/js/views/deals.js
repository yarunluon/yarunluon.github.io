/**
 * A Marionette CollectionView representing a Deals. Contains {@link module:view/Deal}
 * @module view/Deals
 */
define(['marionette', 'views/deal', 'views/no-deals'], function(Marionette, Deal, NoDeals) {
	'use strict';

	return /** @alias module:view/deals */ Marionette.CollectionView.extend({
		childView: Deal,

		tagName: 'ul',

		className: 'list-group',

		emptyView: NoDeals,

		initialize: function(options) {
			this.globalCh = Backbone.Wreqr.radio.channel('global');

			// Empty the deals if the centre closes.
			this.listenTo(this.globalCh.vent, 'close:centre', this.emptyDeals);

			// Deals are added. Find the correct centre to attach to
			this.on('attach before:render', this.attachToCentre);
		},

		emptyDeals: function() {
			this.$el.empty();
		},

		/** Finds the correct centre to attach the deals to */
		attachToCentre: function() {
			var $centre = this.get$centre(this.collection.centre);
			$centre.parents('.panel').append(this.$el);
		},

		onRender: function() {
			// Tell the world that the deals have been rendered
			this.globalCh.vent.trigger('render:deals', this.collection.centre);
		},

		/** Helper function to find the correct centre */
		get$centre: function(id) {
			return $('[data-centre-id="' + id + '"]');
		}
	});
});