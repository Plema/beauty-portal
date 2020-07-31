module.exports = function(grunt){

grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),


	// Concatenate Configuration
	concat: {
		options: {
			separator: ';'
		},
		script: {
			src: [
				'dist/js/main.js'
			],
			dest: '../markup/js/main.min.js'
		}
	},
	

	// Uglify Configuration
	uglify: {
		dist: {
			files: {
				'../markup/js/jquery.min.js': ['dist/js/plugin/jquery.js'],
				'../markup/js/main.min.js': ['dist/js/main.js'],
				'../markup/js/home.min.js': ['dist/js/home.js'],
				'../markup/js/map.min.js': ['dist/js/map.js'],
				'../markup/js/client-history.min.js': ['dist/js/client-history.js'],
				'../markup/js/client-my-masters.min.js': ['dist/js/client-my-masters.js'],
				'../markup/js/event-client.min.js': ['dist/js/event-client.js'],
				'../markup/js/client-client.min.js': ['dist/js/client-client.js'],
				'../markup/js/salon.min.js': ['dist/js/salon.js'],
				'../markup/js/client-message.min.js': ['dist/js/client-message.js'],
				'../markup/js/client-record.min.js': ['dist/js/client-record.js'],
				'../markup/js/create-event.min.js': ['dist/js/create-event.js'],
				'../markup/js/create-share.min.js': ['dist/js/create-share.js'],
				'../markup/js/customer-registration.min.js': ['dist/js/customer-registration.js'],
				'../markup/js/master-client.min.js': ['dist/js/master-client.js'],
				'../markup/js/master-message.min.js': ['dist/js/master-message.js'],
				'../markup/js/master-organaizer.min.js': ['dist/js/master-organaizer.js'],
				'../markup/js/master-record.min.js': ['dist/js/master-record.js'],
				'../markup/js/master-registration.min.js': ['dist/js/master-registration.js'],
				'../markup/js/master-suppliers.min.js': ['dist/js/master-suppliers.js'],
				'../markup/js/new-foto.min.js': ['dist/js/new-foto.js'],
				'../markup/js/new-service.min.js': ['dist/js/new-service.js'],
				'../markup/js/master-activities.min.js': ['dist/js/master-activities.js'],
				'../markup/js/master-clients.min.js': ['dist/js/master-clients.js'],
				'../markup/js/master-foto.min.js': ['dist/js/master-foto.js'],
				'../markup/js/master-my-activities.min.js': ['dist/js/master-my-activities.js'],
				'../markup/js/master.min.js': ['dist/js/master.js'],
				'../markup/js/personal-area-settings.min.js': ['dist/js/personal-area-settings.js'],
				'../markup/js/story-master.min.js': ['dist/js/story-master.js'],
				'../markup/js/provider.min.js': ['dist/js/provider.js'],
				'../markup/js/search.min.js': ['dist/js/search.js'],
				
				
			}
		}
	},

	// Sass Configuration
	sass: {
		options: {
			loadPath: ['bower_components/foundation/foundation.scss']
		},
		dist: {
			options: {
				sourcemap: 'none',
				style: 'compressed'
			},
			files: [{
				expand: true,
				cwd: 'dist/scss/',
				src: ['*.scss'],
				dest: '../markup/css/',
				ext: '.css'
			}]
		}
	},

	
	watch: {
		grunt: { files: ['Gruntfile.js'], tasks: ['default'] },

		sass: {
			files: 'dist/scss/**/*.scss',
			tasks: ['buildCss']
		},

		script: {
			files: 'dist/js/**/*.js',
			tasks: ['buildJs']
		},

		markup: {
			files: '**/*.html',
			tasks: ['htmlbuild']
		}
	},

	fixturesPath: './',
	sourcesPath: '../markup',

    htmlbuild: {
        dist: {
            src: '*.html',
            dest: '<%= sourcesPath %>/templates/',
            options: {
                beautify: true,
                prefix: '../',
                relative: false,
                sections: {
                    views: '<%= fixturesPath %>/*.html',
					templates: '<%= fixturesPath %>/*.html',
					layout: {
						pop_up: '<%= fixturesPath %>/templates/pop-up.html',
						header: '<%= fixturesPath %>/templates/header.html',
						header_personal_area: '<%= fixturesPath %>/templates/header-personal-area.html',
						footer: '<%= fixturesPath %>/templates/footer.html',
						modal_remove_action: '<%= fixturesPath %>/templates/modal-remove-action.html',
						modal_freeze: '<%= fixturesPath %>/templates/popup-freeze.html',
						modal_black_list: '<%= fixturesPath %>/templates/modall-black-list.html',
						modal_request: '<%= fixturesPath %>/templates/modall-request.html',
						modal_message: '<%= fixturesPath %>/templates/modall-write-message.html',
						modal_calendar: '<%= fixturesPath %>/templates/popup-calendar.html',
						widget_add: '<%= fixturesPath %>/templates/widget-add.html',
						pop_up_politics: '<%= fixturesPath %>/templates/pop-up-politics.html',
					}
                },
            }
        }
    }


});

// Load Grunt tasks
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-html-build');




// Register Grunt tasks
grunt.registerTask('buildCss', ['sass']);
grunt.registerTask('buildJs',  ['concat', 'uglify']);
grunt.registerTask('default',  ['buildCss', 'buildJs', 'htmlbuild', 'watch', 'sass']);



};
