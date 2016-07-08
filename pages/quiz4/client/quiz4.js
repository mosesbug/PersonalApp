Template.quiz4.helpers({

	bios: function(){
		return Bios.find();
	}
})

Template.quiz4.events({

	"click .js-submit-bio": function(event){
		event.preventDefault();
		console.dir(event);
		const name = $(".js-name").val();
		const bio = $(".js-bio").val();
		if (name == "" || bio == "") {
			window.alert("Name and/or bio empty!");
			return;
		}

	const bio_obj =
	{name: name, bio: bio};
	console.dir(bio_obj)

	Meteor.call("createBio", bio_obj);
	$(".js-name").val("");
	$(".js-bio").val("");
	}
})