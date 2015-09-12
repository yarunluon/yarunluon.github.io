/**
 * A Backbone model representing a Centre
 * @module model/Centre
 */
define(['backbone'], function(Backbone) {
	'use strict';

	return /** @alias module:model/Centre */ Backbone.Model.extend({
		idAttribute: 'code'
	});
});