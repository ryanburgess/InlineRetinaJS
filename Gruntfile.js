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
        bump: {
            options: {
                files: ['package.json', 'bower.json'],
                updateConfigs: ["pkg"],
                commit: true,
                commitMessage: 'Release v%VERSION%',
                commitFiles: ['package.json'], // '-a' for all files
                createTag: true,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                commitFiles: ["-a"],
                push: false
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