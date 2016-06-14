Template.goals.helpers({
	goals:function(){
		return Goals.find();
	}
})

Template.goals.events({
	"click .js-submit-goal": function(event){
		console.log("Goal submitted!")

		//Read in the values of the input field and store as variables
		const descr = $(".js-descr").val();
		const start = $(".js-start").val();
		const end = $(".js-end").val();	
		const completed = $(".js-completed").is(":checked")
		const goal =
		{descr: descr, start: start, end: end, completed: completed}
		console.dir(goal);
	}

})