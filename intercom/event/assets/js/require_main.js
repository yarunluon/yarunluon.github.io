'use strict';

requirejs.config({
	baseUrl: 'assets/js',
	paths: {
		jquery: 'vendor/jquery-1.11.3.min',
		moment: 'vendor/moment.min'
	}
})

// Entry point into the app
require(['event-app'], function(EventApp) {
	var eventApp = new EventApp();
	eventApp.start();
});