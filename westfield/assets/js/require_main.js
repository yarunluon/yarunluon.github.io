'use strict';

requirejs.config({
	baseUrl: 'assets/js',
	paths: {
		backbone: 'vendor/backbone-min',
		jquery: 'vendor/jquery-1.11.3.min',
		underscore: 'vendor/underscore-min',
		marionette: 'vendor/backbone.marionette.min',
		moment: 'vendor/moment-with-locales.min',
		crossdomain: 'vendor/Backbone.CrossDomain'
	},
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['jquery', 'underscore'],					
			exports: 'Backbone'
		},
		marionette: {
			deps: ['backbone'],
			exports: 'Marionette'
		}
	}
})

// Entry point into the app
require(['app/westfield'], function(Westfield) {
	var westfield = new Westfield();
	westfield.start();
});