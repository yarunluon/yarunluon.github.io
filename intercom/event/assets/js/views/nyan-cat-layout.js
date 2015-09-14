define([], function() {
	'use strict';

	return function(terminal) {
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
		}
	}
});