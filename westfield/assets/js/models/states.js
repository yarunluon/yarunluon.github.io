/**
 * A Backbone collection representing a States. A collection of {@link module:model/State}
 * @module model/States
 */
define(['backbone', 'models/state'], function(Backbone, State) {
	'use strict';

	return /** @alias module:model/States */ Backbone.Collection.extend({

		/** 
		* Initializes the Collection
		* @param {Object} [options] - Configuration options
		* @param {string} [options.country=au] - The states will be grabbed for this country. 
		* @param {boolean} [options.mockup=true] - If true, will massage the response to match the mockup
		*/
		initialize: function(models, options) {
			this.globalCh = Backbone.Wreqr.radio.channel('global');

			options = _.defaults(options || {}, {
				country: 'au',
				mockup: this.globalCh.reqres.request('mockup')
			});
			
			this.country = options.country;
			this.mockup = options.mockup;
		},

		model: State,

		url: function() {
			return 'http://www.westfield.com.au/api/centre/master/states.json?country=' + this.country;
		},

		parse: function(response) {
			return this.mockupResponse(response);
		},

		mockupResponse: function(response) {
			if (!this.mockup) {
				return response;
			}

			// Remove these states because they weren't in the mockup
			response = _.reject(response, function(state) {
				return _.contains(['NT', 'TAS'], state.abbreviation);
			});

			// Kind of yucky, but this keeps the tab order the same as the mockup
			var mockupResponse = [];
			mockupResponse = mockupResponse.concat(getState('NSW'));
			mockupResponse = mockupResponse.concat(getState('ACT'));
			mockupResponse = mockupResponse.concat(getState('QLD'));
			mockupResponse = mockupResponse.concat(getState('VIC'));
			mockupResponse = mockupResponse.concat(getState('SA'));
			mockupResponse = mockupResponse.concat(getState('WA'));

			return mockupResponse;

			function getState(abbr) {
				var index = _.findIndex(response, function(state) {
					return state.abbreviation == abbr
				});

				return response.splice(index, 1);
			}
		}
	});
});