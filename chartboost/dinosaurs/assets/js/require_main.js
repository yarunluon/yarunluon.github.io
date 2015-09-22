'use strict';

requirejs.config({
	baseUrl: 'assets/js',
	paths: {
		backbone: 'vendor/backbone-min',
		jquery: 'vendor/jquery-1.11.3.min',
		underscore: 'vendor/underscore-min',
		marionette: 'vendor/backbone.marionette.min',
		text: 'vendor/text'
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
});

// Entry point into the app
require(['app/dinosaur-app'], function(Dinosaur) {
	var dinosaur = new Dinosaur();
	dinosaur.start();
});