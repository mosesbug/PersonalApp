Router.configure({
	layoutTemplate: 'layout',
});

Router.route('/',{name:"home"});

Router.route('/about',{name:"about"});

Router.route('/comments',{name:"comments"});

Router.route('/goals',{name:"goals"});

Router.route('/myoldgoals',{name:"myoldgoals"});

Router.route('/showgoals/:_id', {name: "showgoals", data: function() {
	const c = Goals.findOne({_id: this.params._id})
	return c;
	}
})




