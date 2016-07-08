Meteor.publish("theGoals",
	function(){return Goals.find();})

Meteor.publish("theComments",
	function(){return Comments.find();})

Meteor.publish("theOldGoals",
	function(){return OldGoals.find();})