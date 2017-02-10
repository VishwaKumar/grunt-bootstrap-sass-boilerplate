module.exports = function(grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		sass: {
            dist: {
                options: {
                    sourcemap: 'auto',
                    style: 'compressed',
                    compass: false
                },
                files: {
					'build/vendor/bootstrap/bootstrap.min.css' : 'src/sass/bootstrap/bootstrap.scss',
					'build/css/style-guide.min.css': 'src/sass/app/style-guide.scss',
                    'build/css/style.min.css': 'src/sass/app/app.scss'
                }
            }
        },
		
		copy: {
			main: {
				files: {
					'build/vendor/bootstrap/bootstrap.min.js': 'node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js',
					'build/vendor/jquery/jquery.min.js': 'node_modules/jquery/dist/jquery.min.js',
					'build/js/style-guide.js': 'src/js/style-guide.js'
				}
			},
			styleguidejs: {
				files: {
					'build/js/style-guide.js': 'src/js/style-guide.js'
				}
			}
		},
		
		watch: {
			sass: {
				files: ['src/sass/**/*.scss'],
				tasks: ['sass']
		  	},
		  	copy: {
		  		files: ['src/js/style-guide.js'],
				tasks: ['copy:styleguidejs']
		  	}
	    },
	});
	
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['sass', 'copy']);
	
};