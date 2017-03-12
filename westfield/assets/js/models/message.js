/**
 * A Backbone model representing a Message
 * @module model/Message
 */
define(['backbone'], function(Backbone) {
	'use strict';

	return /** @alias module:model/Message */ Backbone.Model.extend({
		initialize: function (attrs) {
			var defaults = {
				event: {},
				type: 'primary',
				message: '',
				title: '',
			}
			var nextAttrs = _.extend({}, defaults, attrs);

			if (nextAttrs.event.status >= 400) {
				nextAttrs = {
					title: 'Pardon us',
					message: 'We\'re having some difficulty getting all the data.',
					type: 'error'
				}
			}

			this.set(nextAttrs);
		}
	});
});
