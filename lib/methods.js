Meteor.methods({

'createProfile': function(info) {
	UserProfiles.insert(info)
},


})