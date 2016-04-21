module.exports = function(grunt){
	var nodeModules = {
		angular : 'node_modules/angular/angular.min.js',
		angularRoute : 'node_modules/angular-route/angular-route.min.js'
	}
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				stripBanners: true,
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */',
				separator: '\n',
			},
			dist: {
				src: [nodeModules.angular, nodeModules.angularRoute, 'app/js/*.js', 'app/js/**/*.js'],
				dest: 'app/dist/<%= pkg.name %>.debug.js',
			},
		},
		watch: {
			scripts: {
				files: ['app/js/*.js'],
				tasks: ['concat', 'http-server'],
				options: {
					spawn: false,
				},
			},
		},
		'http-server': {
		    'dev': {
		        // the server root directory 
		        root: '', 
		        port: 8080,
		        cache: false,
		        showDir : true,
		        autoIndex: true,
		        ext: "html",
		        runInBackground: true,
		        openBrowser : false,
		        customPages: {}
		    }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-http-server');

	grunt.registerTask('default', ['http-server', 'watch']);
}