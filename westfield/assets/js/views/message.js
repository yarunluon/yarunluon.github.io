/**
 * A Marionette ItemView representing a Message. Either set by the system or from the api.
 * @module view/Message
 */
define(['marionette'], function(Marionette) {
	'use strict';

	var typeClassMap = {
		error: 'panel-danger',
		info: 'panel-info',
		default: 'panel-primary'
	};

	return /** @alias module:view/Message */ Marionette.ItemView.extend({
		template: '#message-template',

		className: function() {
			var messageClass = typeClassMap[this.model.get('type')] || typeClassMap.default;
			return 'panel ' + messageClass;
		},
	})
});
