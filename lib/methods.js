Meteor.methods({
'createGoal': function(goal) {
	Goals.insert(goal);
},

'removeGoal': function(goal) {
	Goals.remove(goal)
},
'createComment': function(comment) {
	Comments.insert(comment)
},
'removeComment': function(comment) {
	Comments.remove(comment)
},

'archiveGoal': function(goal) {
	OldGoals.insert(goal);
},

'sayhilib': function() {
	console.log("hi from lib")
},



})