/**
 * A Backbone collection representing Periods; a collection of models.
 * @module model/Periods
 */
define(['backbone'], function(Backbone) {
	'use strict';

	return /** @alias module:model/Periods */ Backbone.Collection.extend({

		parse: function(response) {
			return response.map(function(item) {
				// Massage the list of strings to be a little more Backbone friendly.
				return {
					id: item.toLowerCase(),
					name: item
				};
			});
		}
	});
})