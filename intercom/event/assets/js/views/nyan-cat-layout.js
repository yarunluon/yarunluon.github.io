define(['jquery'], function($) {
	'use strict';

	return function(terminal, events) {

		this.show = function() {
			terminal.clear();

			// Good job!
			terminal.print("Nyan Cat thanks you for caring!")
			terminal.print('░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░');
			terminal.print('░░░░░░░░░░▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄░░░░░░░░░');
			terminal.print('░░░░░░░░▄▀░░░░░░░░░░░░▄░░░░░░░▀▄░░░░░░░');
			terminal.print('░░░░░░░░█░░▄░░░░▄░░░░░░░░░░░░░░█░░░░░░░');
			terminal.print('░░░░░░░░█░░░░░░░░░░░░▄█▄▄░░▄░░░█░▄▄▄░░░');
			terminal.print('░▄▄▄▄▄░░█░░░░░░▀░░░░▀█░░▀▄░░░░░█▀▀░██░░');
			terminal.print('░██▄▀██▄█░░░▄░░░░░░░██░░░░▀▀▀▀▀░░░░██░░');
			terminal.print('░░▀██▄▀██░░░░░░░░▀░██▀░░░░░░░░░░░░░▀██░');
			terminal.print('░░░░▀████░▀░░░░▄░░░██░░░▄█░░░░▄░▄█░░██░');
			terminal.print('░░░░░░░▀█░░░░▄░░░░░██░░░░▄░░░▄░░▄░░░██░');
			terminal.print('░░░░░░░▄█▄░░░░░░░░░░░▀▄░░▀▀▀▀▀▀▀▀░░▄▀░░');
			terminal.print('░░░░░░█▀▀█████████▀▀▀▀████████████▀░░░░');
			terminal.print('░░░░░░████▀░░███▀░░░░░░▀███░░▀██▀░░░░░░');
			terminal.print('░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░');
			terminal.printNewLine();
			
			terminal.print('Job well done. Exit status 0');
			terminal.print('PS: Don\'t mention his account was hacked');
			terminal.printNewLine();

			terminal.print('[Press any key to start over]');

			$(document).one('keypress', function() {
				var OverviewLayout = require('views/overview-layout');
				var overviewLayout = new OverviewLayout(terminal, events);
				overviewLayout.show();
			});
		}
	}
});