define(['moment'], function(moment) {
	'use strict';

	return function(event) {
		var date = createDate();

		function createDate() {
			var date = new moment();
			date.year(event.year);
			date.month(event.month);
			date.date(event.day);

			return date;
		}

		return {
			getOccasion: function() {
				return event.occasion;
			},

			getInvitedCount: function() {
				return event.invited_count;
			},

			getDate: function(format) {
				format = format || 'dddd: MMMM DD, YYYY';
				return date.format(format);
			},

			isCancelled: function() {
				return !!event.cancelled;
			},

			isOver: function() {
				return date.isBefore(new moment());
			}
		}
	}
});
