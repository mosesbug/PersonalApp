Template.myProfile.helpers({
	goals:function(){
		return UserProfiles.find();
	}
})

Template.myProfile.events({
	"click .js-submit-info": function(event){
		console.log("Info submitted!")
		event.preventDefault();
		console.dir(event);
		//Read in the values of the input field and store as variables
		const first = $(".js-first").val();
		const last = $(".js-last").val();
		const nick = $(".js-nick").val();
		const email = $(".js-email").val();
		const birth = $(".js-birth").val();	
		if (first =="" || last =="" || nick ==""|| email =="" || birth =="") {
			window.alert("Some info is empty!")
			return;
		}


		const profile_info =
		{first: first, last: last, nick: nick, email: email, birth: birth, id: Meteor.userId()}
		console.dir(profile_info);

		//Goals.insert(current_goal)
		Meteor.call("createProfile", profile_info);
		$(".js-first").val("");
		$(".js-last").val("");
		$(".js-nick").val("");
		$(".js-email").val("");
		$(".js-birth").val("");	

		window.location = "http://localhost:3000/profiles"
	}

})