/**
 * To use grunt, refer to http://gruntjs.com/
 */
module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: ['cftraining.js', 'specs/**/*.js']
    },
    clean: {
      build: ['build/']
    }
    jasmine: {
      specs: {
        src : 'cftraining.js',
        options: {
          specs: 'specs/specs.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Default task.
  grunt.registerTask('default', 'jshint');
};