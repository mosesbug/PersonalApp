Template.home.onCreated(function() {
  this.state = new ReactiveDict();
  this.state.setDefault({
    color: "bg-info",
    counter: 0,
  });
  console.log("Creating the template");
  console.dir(this.state);

});

Template.home.helpers({
	theColor: function() {
		console.log("the color is");
		console.dir($(".js-color").val());
		const instance = Template.instance();
		return instance.state.get("color");
	},

	theCounter: function() {
		const instance = Template.instance();
		return instance.state.get("counter");
	}

})

Template.home.events({
	"change .js-color": function(event,instance) {
		const c = instance.$(".js-color").val();
		instance.state.set("color", c)
	},
	"click .js-pusher": function(event,instance) {
		instance.state.set("counter", instance.state.get("counter") + 1);
	},
	"click .js-reset": function(event,instance) {
		instance.state.set("counter", 0);
	},
})