/**
 * A Backbone collection representing a Deals. A collection of Backbone models.
 * @module model/Deals
 */
define(['backbone'], function(Backbone){
	'use strict';

	return /** @alias module:model/Deals */ Backbone.Collection.extend({

		/** 
		* Initializes the Collection
		* @param {Object} [options] - Configuration options
		* @param {string} [options.centre=bondijunction] - The deals will be grabbed for this centre. 
		* @param {boolean} [options.mockup=true] - If true, will massage the response to match the mockup
		*/
		initialize: function(models, options) {
			this.globalCh = Backbone.Wreqr.radio.channel('global');
			
			options = _.defaults(options || {}, {
				centre: 'bondijunction',
				mockup: this.globalCh.reqres.request('mockup')
			});

			this.centre = options.centre;
			this.mockup = options.mockup;
		},

		url: function() {
			return 'http://www.westfield.com.au/api/deal/master/deals.json?state=published&centre=' + this.centre;
		},

		parse: function(response) {
			return this.mockupResponse(response);
		},

		mockupResponse: function(response) {
			var numDeals = 4;

			if (!this.mockup || response.length <= numDeals) {
				return response;
			}

			// Mockup only shows 4 deals.
			// Pick four random ones for fun because the deals in the mockup don't exist
			// Wasn't sure if the first four should be returned, but random seems more fun
			return _.sample(response, 4);
		}
	});
});