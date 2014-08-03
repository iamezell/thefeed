require.config({
	paths:{
		jQuery:'../../bower_components/jquery/jquery.min'
	},
	shim:{
		backbone:{
			deps:['jquery', 'underscore'],
			exports:'Backbone'
		},
		underscore:{
			exports:'_'
		}
	}
});