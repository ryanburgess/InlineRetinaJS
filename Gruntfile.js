module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      dist: {
        files:{
          'js/inline-retina.min.js': ['js/inline-retina.js']
        },
      }
    },
    jshint: {
      all: ['**/*.js'],
      options: {
        reporter: require('jshint-stylish'),
        curly: true,
        eqeqeq: true,
        eqnull: false,
        browser: true,
        indent: 2,
        quotmark: 'single',
        unused: false,
        ignores: ['node_modules/**/*.js','**/*min.js'],
        globals: {
          jQuery: true
        },
      },
    },
    watch: {
      scripts: {
        files: 'js/**/*.js',
        tasks: ['newer:uglify', 'newer:jshint'],
        options: { 
          spawn: false,
          livereload: true 
        },
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-newer');
  grunt.registerTask('default',['watch']);
};