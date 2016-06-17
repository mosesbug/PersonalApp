Meteor.startup(function(){
	if (Goals.find().count()==0) {
		Goals.insert({descr:"Start personal app", start: "6/14/16 1:30pm", end: "6/14/16 11:59pm", completed: false});
	}
})