/**
 * A Backbone model representing a State
 * @module model/State
 */
define(['backbone'], function(Backbone) {
	'use strict';

	return /** @alias module:model/State */ Backbone.Model.extend({
		idAttribute: 'abbreviation'
	});
});