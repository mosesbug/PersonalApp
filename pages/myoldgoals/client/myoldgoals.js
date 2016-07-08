Template.myoldgoals.helpers({

	myOldGoals:function(){
		return OldGoals.find({'userEmail': Meteor.user().emails[0].address});
	}
})