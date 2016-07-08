

Meteor.publish("theBios",
	function(){return Bios.find();})