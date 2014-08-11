module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch:{
			livereload:{
				options:{
					
				},
				files:['src/**']
			},
			requirejs:{
				tasks:['requirejs'],
				files:['src/javascripts/**/*.js']
			}
		},
		
//	uglify: {
//      options: {
//        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
//      },
//      build: {
//        src: 'src/<%= pkg.name %>.js',
//        dest: 'build/<%= pkg.name %>.min.js'
//      }
//			},
	express: {
    custom: {
      options: {
        port: 9001,
        bases: 'www-root',
        server: './app.js'
      }
    }
  },
	
	jasmine : {
		thefeed: {
			src:'src/*.js',
			options: {
				specs: 'spec/TestButtonSpec.js',
				helpers:'spec/*Helper.js',
				host: 'http://127.0.0.1:9001/public',
				template:require('grunt-template-jasmine-requirejs'),
				templateOptions: {
					requireConfig: {
						requireConfigFile:'src/javascripts/config.js',
					}
				}
			}
		}
	}
	
	})
	
//	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express');
	
	
	
	grunt.registerTask('default', ['express','jasmine','express-keepalive']);
}
