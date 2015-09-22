/**
 * A Backbone collection representing Dinosaurs; a collection of models.
 * @module model/Dinosaurs
 */
define(['backbone'], function(Backbone) {
	'use strict';

	var period;

	return /** @alias module:model/Dinosaurs */ Backbone.Collection.extend({

			url: function() {
				return 'http://dino.chartboost.com/periods/' + period;
			},

			comparator: function(item) {
				var boosters = item.get('boosters');

				// Descending sort
				var value = Array.isArray(boosters) ? -boosters.length : 0;

				return value;
			},

			parse: function(response) {
				return response.dinosaurs;
			},

			/**
			* Dinosaurs will be fetched according to the period.
			**/
			setPeriod: function(newPeriod) {
				period = newPeriod;
			}
	});
})