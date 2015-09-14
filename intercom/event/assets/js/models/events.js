define(['jquery', 'models/event'], function($, Event) {
	'use strict';

	return function() {
		var events = [];

		return {
			fetch: function() {
				return $.getJSON('./assets/js/data/events.json').done(function(payload) {
					// Event data grabbed
					payload.events.forEach(function(event) {
						events.push(new Event(event));
					});
				});
			},

			getEvents: function() {
				return events;
			}
		}
	}
})