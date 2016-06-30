Meteor.publish("theGoals", function () {
  if (this.userId) {
	  //console.log(this);
	  return Goals.find({id: this.userId}); //, //{_id: this.userId},
                             //{fields: {'profile': 1, 'things': 1}});
  } else {
    this.ready();
  }
});

Meteor.publish("theComments",
	function(){return Comments.find();})

Meteor.publish("theSettings",
	function () {return Settings.find();});