define(['jquery', 'views/hacking-layout'], function($, HackingLayout) {
	'use strict';

	return function(terminal, events) {
		var goToHacking = function() {
			hackingLayout.show();
		}

		var $terminal = $('#terminal');

		this.show = function() {
			terminal.clear();

			// Title
			terminal.print('Welcome to Hackly Madison');
			terminal.print('Life is short. Hack an event.');
			terminal.printNewLine();

			// Greeting
			terminal.print('Greetings Hacker. Nyan Cat has been kidnapped!');
			terminal.print('Hack his calendar to find out more information.');
			terminal.printNewLine();

			// Events
			terminal.print('Nyan Cat\'s calendar:')
			events.getEvents().forEach(function (event, index) {
				var line = '[' + (index + 1) + '] ' +  event.getDate();
				terminal.print(line);
			});
			terminal.printNewLine();

			// Any keypress loads next screen
			terminal.input('Press any key to begin hacking', function(input) {});
			$terminal.one('keypress', function() {
				var hackingLayout = new HackingLayout(terminal, events);
				hackingLayout.show();
			});
		}
	}
})