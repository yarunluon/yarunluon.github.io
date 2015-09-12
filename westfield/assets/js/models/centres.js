/**
 * A Backbone collection representing a Centres. A collection of {@link module:model/Centre}
 * @module model/Centres
 */
define(['backbone', 'models/centre'], function(Backbone, Centre) {
	'use strict';

	return /** @alias module:model/Centres */ Backbone.Collection.extend({

		/** 
		* Initializes the Collection
		* @param {Object} [options] - Configuration options
		* @param {string} [options.state=NSW] - The centres will be grabbed for this state. 
		* @param {boolean} [options.mockup=true] - If true, will massage the response to match the mockup
		*/
		initialize: function(models, options) {
			this.globalCh = Backbone.Wreqr.radio.channel('global');
			
			options = _.defaults(options || {}, {
				state: 'NSW',
				mockup: this.globalCh.reqres.request('mockup')
			});

			this.state = options.state;
			this.mockup = options.mockup;
		},

		model: Centre,

		url: function() {
			return 'http://www.westfield.com.au/api/centre/master/centres.json?state=' + this.state;
		},

		parse: function(response) {
			return this.mockupResponse(response);
		},

		mockupResponse: function(response) {
			var numCentre = 6;

			if (!this.mockup || response.length <= numCentre) {
				return response;
			}

			// Mockup only shows 6 centres. Showing the first 6.
			return response.slice(0, numCentre);
		}
	});
})