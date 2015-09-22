/**
 * A Marionette view showing a collection of Dinosaurs. If empty, will show a NoDinosaurs view.
 * @module view/Dinosaurs
 */
define([
	'marionette', 
	'views/dinosaur',
	'views/no-dinosaurs'
	], function(Marionette, Dinosaur, NoDinosaurs) {
	'use strict';

	return /** @alias module:view/Dinosaurs */ Marionette.CollectionView.extend({
		childView: Dinosaur,

		emptyView: NoDinosaurs,

		className: 'dinosaurs-fluid'
	});
});