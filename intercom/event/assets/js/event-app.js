define([
	'jquery',
	'models/events',
	'views/overview-layout',
	], function($, Events, OverviewLayout) {
	'use strict';		

	return function() {
		var events = new Events();
		var terminal = new Terminal();
		var BRIGHT_GREEN = '#00ff00';

		// Setup terminal
		$('#terminal').append(terminal.html);
		terminal.blinkingCursor(false);
		terminal.setTextColor(BRIGHT_GREEN);

		this.start = function() {
			$.when(events.fetch()).done(function() {
				// Data loaded. Start app
				var overviewLayout = new OverviewLayout(terminal, events);
				overviewLayout.show();
			})
		}
	}
});