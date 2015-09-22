/**
* A Marionette Application representing the Dinosaur Db app. This module represents the C in the MVC
* @module DinosaurApp
*/
define([
	'marionette',
	'models/dinosaurs',
	'models/periods',
	'views/dinosaur-layout',
	'views/banner',
	'views/nav',
	'views/no-period',
	'views/loading',
	'views/no-dinosaurs',
	'views/extinction-event',
	'views/dinosaurs'
	], function(
		Marionette, 
		Dinosaurs, 
		Periods, 
		DinosaurLayout, 
		BannerView, 
		NavView, 
		NoPeriodView, 
		LoadingView, 
		NoDinosaursView,
		ExtinctionEventView,
		DinosaursView) {
		'use strict';

		// Available periods
		var periods = [
			"Triassic",
			"Jurassic",
			"Cretaceous"
		]

		return /** @alias module:DinosaurApp */ Marionette.Application.extend({

			/**
			* Registers callbacks for system messages and initializes models and layout
			*/
			onBeforeStart: function() {
				this.globalCh = Backbone.Wreqr.radio.channel('global');

				this.setEvents();
				this.setCommands();

				this.dinosaurs = new Dinosaurs();
				this.periods = new Periods(periods, { parse: true });
				this.rootView = new DinosaurLayout();
			},

			/**
			* Fetches Period data and shows the layout
			**/
			onStart: function() {
				this.showLayout();
			},

			showLayout: function() {
				this.rootView.banner.show(new BannerView());
				this.rootView.nav.show(new NavView({ collection: this.periods }));
				this.rootView.display.show(new NoPeriodView());
			},

			setEvents: function() {
				this.globalCh.vent.on('select:period', this.onSelectPeriod.bind(this));
			},

			/**
			* A Period was selected. Show loading screen and get Dinosaurs for that period.
			**/
			onSelectPeriod: function(period) {
				this.rootView.display.show(new LoadingView());
				this.globalCh.commands.execute('show:period', period);
			},

			setCommands: function() {
				this.globalCh.commands.setHandler('show:period', this.executeShowPeriod.bind(this));
			},

			/**
			* Show Dinosaurs for a certain period
			*/
			executeShowPeriod: function(period) {
				this.dinosaurs.setPeriod(period);

				$.when(this.dinosaurs.fetch())

					.done(function() {
						this.rootView.display.show(new DinosaursView({ collection: this.dinosaurs.sort() }));
					}.bind(this))

					.fail(function(xhr) {
						if (xhr.status === 404) {
							// No dinosaurs
							this.rootView.display.show(new NoDinosaursView());
						} else {
							// Something weird happened
							console.error(xhr.status, 'Problem getting dinosaurs for ', period);	
							this.rootView.display.show(new ExtinctionEventView())
						}
					}.bind(this));
			}
		});
	});