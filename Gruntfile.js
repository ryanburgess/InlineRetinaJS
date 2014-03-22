module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            dist: {
              files:{
                    'js/InlineRetina.min.js': ['js/InlineRetina.js']
              },
            }
        },
        watch: {
            css: {
                files: 'source/**/*.scss',
                tasks: ['sass'],
                options: { 
                    spawn: false,
                    livereload: true 
                },
            },
            scripts: {
                files: 'js/**/*.js',
                tasks: ['newer:uglify'],
                options: { 
                    spawn: false,
                    livereload: true 
                },
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-newer');
    grunt.registerTask('default',['watch']);
}