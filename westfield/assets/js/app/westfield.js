/**
* A Marionette Application representing the Westfield Deals app. This module represents the C in the MVC
* @module Westfield
*/
define([
	'marionette',
	'models/centres',
	'models/states',
	'models/deals',
	'views/westfield-layout',
	'views/tabs',
	'views/search',
	'views/centres',
	'views/banner',
	'views/deals',
	'crossdomain'
	], function(Marionette, Centres, States, Deals, WestfieldLayout, TabsView, SearchView, CentresView, BannerView, DealsView, crossdomain) {
		'use strict';

		return /** @alias module:Westfield */ Marionette.Application.extend({

			/** 
			* Initializes the Westfield application
			* @param {Object} [options] - Configuration options
			* @param {boolean} [options.bootstrap=true] - If true, uses the json written to the html. Otherwise, calls the APIs upon pageload
			* @param {boolean} [options.mockup=true] - If true, will massage the response to match the mockup
			*/
			initialize: function(options) {
				options = _.defaults(options || {}, {
					bootstrap: true,
					mockup: true
				});

				// Merge options to Application
				this.mergeOptions(options, ['mockup', 'bootstrap']);
			},

			onBeforeStart: function() {
				// Setup messaging system
				this.globalCh = Backbone.Wreqr.radio.channel('global');
				this.setEvents();
				this.setCommands();
				this.setReqRes();

				// Load boostrap data or fetch depending on options
				this.states = this.bootstrap ? new States(json.states, { parse: true }) : new States();
				this.centres = this.bootstrap ? new Centres(json.centres, { parse: true }) : new Centres();
				this.deals = this.bootstrap ? new Deals(json.deals, { parse: true }) : new Deals();

				// If the centre changes, the deals need to be fetched for that centre
				this.deals.listenTo(this.centres, 'reset', _.bind(this.onResetCentre, this));

				this.rootView = new WestfieldLayout();
			},

			onStart: function() {
				if (Backbone.history) {
					Backbone.history.start();	
				}

				if (this.bootstrap) {
					this.showLayout();	
				} else {
					// Call all three apis
					$.when(
						this.states.fetch(), 
						this.centres.fetch(), 
						this.deals.fetch()
					)

					.done(_.bind(function() {
						this.showLayout();
					}, this))

					.fail(_.bind(function() {
						console.error("There was a problem fetching initial data");
					}, this));
				}
			},

			showLayout: function() {
				// Instantiate views
				var tabsView = new TabsView({ collection: this.states });
				var centresView = new CentresView({ collection: this.centres });
				var dealsView = new DealsView({ collection: this.deals });

				// Show views
				this.rootView.banner.show(new BannerView());
				this.rootView.search.show(new SearchView());
				this.rootView.nav.show(tabsView);
				this.rootView.centres.show(centresView);
				this.rootView.deals.show(dealsView);
			},

			/** A new centre is loaded so new deals need to be fetched */
			onResetCentre: function() {
				if (this.centres.isEmpty()) {
					console.error(this.centres.state, "returned no Centres");
					return;
				}

				// Show deals for first centre
				var centre = this.centres.at(0);
				this.globalCh.commands.execute('show:deals', centre.id);
			},

			setEvents: function() {
				this.globalCh.vent.on('click:tab', _.bind(this.onClickTab, this));
				this.globalCh.vent.on('open:centre', _.bind(this.onOpenCentre, this));
			},

			/** A tab was clicked so we show the centres for that state */
			onClickTab: function(state) {
				this.globalCh.commands.execute('show:centres', state);
			},

			/* A center was clicked so we show the deals for that centre */
			onOpenCentre: function(centre) {
				this.globalCh.commands.execute('show:deals', centre);
			},

			setCommands: function() {
				this.globalCh.commands.setHandler('show:centres', _.bind(this.executeShowTab, this));
				this.globalCh.commands.setHandler('show:deals', _.bind(this.executeShowDeals, this));
			},

			executeShowTab: function(state) {
				this.centres.state = state;
				this.centres.fetch({ reset: true});
			},

			executeShowDeals: function(centre) {
				this.deals.centre = centre;
				this.deals.fetch({ reset: true });
			},

			setReqRes: function() {
				this.globalCh.reqres.setHandler('locale', _.bind(this.reqResLocale, this));
				this.globalCh.reqres.setHandler('mockup', _.bind(this.reqResMockup, this));
			},

			/** 
			* Returns if the app should be simulating the mockup
			* @returns {Boolean}
			*/
			reqResMockup: function() {
				return !!this.mockup;
			},

			/**
			* Gets the locale used by the app
			* @returns {String} 'en-AU' if mockup, else returns the browser locale
			*/
			reqResLocale: function() {
				return this.mockup ? 'en-AU' : navigator.language;
			}
		});
	}
);