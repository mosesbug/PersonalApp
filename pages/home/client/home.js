Template.home.onCreated(function() {
  this.state = new ReactiveDict();
  this.state.setDefault({
    greeting: "",
  });
  console.log("Creating the template");
  console.dir(this.state);

});

Template.home.helpers({

	theGreeting: function() {
		const instance = Template.instance();
		return instance.state.get("greeting");
	},

})

Template.home.events({

	"click .js-submit-greeting": function(event,instance) {
		instance.state.set("greeting", $(".js-greeting").val());
	},
})