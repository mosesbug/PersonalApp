Template.about.helpers({
	goals:function(){
		return Settings.find();
	}
})

Template.about.events({
	"click .js-submit-greeting": function(event){
		console.log("Greeting submitted!")
		event.preventDefault();
		console.dir(event);
		//Read in the values of the input field and store as variables
		const greeting = $(".js-greeting").val();
		
		if (greeting =="") {
			window.alert("Greeting empty!")
			return;
		}


		const current_greeting =
		{greeting: greeting, id: Meteor.userId()}
		console.dir(current_greeting);

		//Goals.insert(current_goal)
		Meteor.call("homeGreeting", current_greeting);
		$(".js-greeting").val("");
	}

})