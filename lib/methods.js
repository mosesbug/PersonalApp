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
})