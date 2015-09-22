/**
 * A Marionette view showing an error. This view is shown for errors that are not 404; for example, a 501.
 * @module view/ExtinctionEvent
 */
define(['marionette'], function(Marionette) {
	'use strict';

	return /** @alias module:view/ExtinctionEvent */ Marionette.ItemView.extend({

		template: '#extiction-event-template'
	});
});
