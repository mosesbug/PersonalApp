Router.configure({
	layoutTemplate: 'layout',
});

Router.route('/',{name:"home"});

Router.route('/testing',{name:"testing"});

Router.route('/about',{name:"about"});

Router.route('/comments',{name:"comments"});

Router.route('/goals',{name:"goals"});

Router.route('/showgoals/:_id', {name: "showgoals", data: function() {
	const c = Goals.findOne({_id: this.params._id})
	return c;
	}
})




