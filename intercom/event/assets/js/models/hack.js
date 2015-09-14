define([], function() {
	'use strict';

	return function(codeStr) {
		var code = codeStr.split('');

		return {
			getCodePiece: function() {
				// Only return 3 characters at a time
				return code.splice(0,3).join('');
			},

			isDone: function() {
				return code.length === 0;
			}
		}
	}
});