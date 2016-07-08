Template.goals.helpers({
	goals:function(){
		return Goals.find();
	},

	myGoals:function(){
		return Goals.find({'userEmail': Meteor.user().emails[0].address});
	}
})

Template.goals.events({
	"click .js-submit-goal": function(event){
		console.log("Goal submitted!")
		event.preventDefault();
		console.dir(event);
		//Read in the values of the input field and store as variables
		const descr = $(".js-descr").val();
		const end = $(".js-end").val();	
		if (end =="" || descr =="") {
			window.alert("Description and/or due date empty!")
			return;
		}


		const current_goal =
		{descr: descr, start: new Date, end: end, userEmail: Meteor.user().emails[0].address, id: Meteor.userId()}
		console.dir(current_goal);

		//Goals.insert(current_goal)
		Meteor.call("createGoal", current_goal);
		$(".js-descr").val("");
		$(".js-end").val("");
	}

})

Template.goalRow.events({
	"click .js-delete-goal": function(event){
		console.log("clicked on the x");
		console.dir(this.goal);
		Meteor.call("removeGoal", this.goal)
		//Goals.remove({_id:this.goal._id});
	}
})