Template.comments.helpers({
	comments: function(){return Comments.find({},{sort:{createdAt:-1}, limit:5})}
})

Template.comments.events({
	"click .js-submit-comment": function(event){
		event.preventDefault();
		console.dir(event);
		const comment_text = $(".js-user-comment").val();
		const comment_rating = $(".js-user-rating").val();
		if (comment_text == "") {
			window.alert("Comment empty!");
			return;
		}
		const comment_obj =
		{text: comment_text,
		rating: comment_rating,
		createdAt: new Date(),
		createdBy: Meteor.userId(),
		userEmail: Meteor.user().emails[0].address};
		console.dir(comment_obj);

		Comments.insert(comment_obj);
		$(".js-user-comment").val("");
		//Router.go('/');
	}

})

Template.commentRow.events({
	"click .js-delete-comment": function(event){
		console.log("clicked on the x");
		console.dir(this);
		//const = comment_id = $(".glyphicon").val();
		Comments.remove(this.comment_id);
	}
})