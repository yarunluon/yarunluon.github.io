define([
	'views/nyan-cat-layout'
], function(NyanCatLayout) {
	'use strict';

	return function(terminal, events) {

		var NEWLINE = false;

		// Beginning messages
		var messages = [
			'Hacking finished...',
			'Compiling code...',
			'Enabling proxies..',
			'Scanning firewall...',
			'Retrieving sensitive information...',
			NEWLINE
		];

		// Messages to display at the end
		var conclusionMessages = [
			'Analyzing persons of interest...',
			'========= Nyan Cat found! =========',
			'Nyan Cat was not kidnapped. Cell phone battery died.',
			'Deleting unneeded search warrants...',
			'Taking people off no-fly list..',
			'Calling back SWAT teams...'
		];

		// Generate custom message depending on event
		var createMessages = function() {
			events.getEvents().forEach(function(event) {
				var numPeople = event.getInvitedCount();
				if (event.isCancelled()) {
					messages.push('On ' + event.getDate() + ' Nyan Cat was supposed to go to the ' + event.getOccasion() + '...');
					messages.push(event.getOccasion() + ' was cancelled...');
					messages.push(getRandomInvestigationMessage(numPeople));
					messages.push(getRandomActionMessage());
				} else if (event.isOver()) {
					messages.push('On ' + event.getDate() + ' Nyan Cat went to the ' + event.getOccasion() + '...');
					messages.push(getRandomInvestigationMessage(numPeople));
					messages.push(getRandomActionMessage());
				} else {
					// Happening in the future
					messages.push('On ' + event.getDate() + ' Nyan Cat will be at the ' + event.getOccasion() + '...');
					messages.push(getRandomInvestigationMessage(numPeople));
					messages.push(getRandomActionMessage());
				}

				messages.push(NEWLINE);
			})

			messages = messages.concat(conclusionMessages);
		};

		var getRandomInvestigationMessage = function(numPeople) {
			var randomMessages = [
				'Reading personal emails on ' + numPeople + ' invited guests...',
				'Doing background searches on  ' + numPeople + ' invited guests...',
				'Hacking Facebook accounts of ' + numPeople + ' invited guests...',
				'Calling mothers of all ' + numPeople + ' invited guests...'
			]

			var i = Math.floor(Math.random() * randomMessages.length);

			return randomMessages[i];
		}

		var getRandomActionMessage = function() {
			var randomMessages = [
				'Logging suspicious people...',
				'Calling SWAT teams...',
				'Sending out snipers...',
				'Creating search warrents...',
				'Putting people on no-fly lists...'
			]

			var i = Math.floor(Math.random() * randomMessages.length);

			return randomMessages[i];
		}
		// Calculate when each message will be displayed
		var showProgress = function() {
			var sleepCounter = 0;
			var MIN_SECONDS_WAIT = 1000;
			var NOISY_SECONDS_WAIT = 1000;
			var MAX_SECONDS_WAIT = 3000;

			messages.forEach(function(message, index) {

				// Set timer
				terminal.sleep(sleepCounter, function() {
					message ? terminal.print(message) : terminal.printNewLine();
				})

				// Calculate how many seconds later next message will display
				var nextSleep = Math.floor(Math.random() * NOISY_SECONDS_WAIT + MIN_SECONDS_WAIT);
				sleepCounter += nextSleep;
			})

			// Show next layout
			var nyanCatLayout = new NyanCatLayout(terminal);
			setTimeout(nyanCatLayout.show, sleepCounter + MAX_SECONDS_WAIT);
		};

		this.show = function() {
			createMessages();
			terminal.clear();

			showProgress();
		};
	}
});
