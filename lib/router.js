Router.configure({
	layoutTemplate: 'layout',
});

Router.route('/', {name:"quiz4"})

Router.route('/showbios/:_id', {name: "showbios", data: function() {
	const c = Bios.findOne({_id: this.params._id})
	return c;
	}
})




