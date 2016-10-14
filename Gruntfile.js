module.exports = function(grunt) {

  grunt.initConfig({
    
	 i18nextract: {
		default_options: {
		src: [ 'src/**/*.js', 'src/**/*.html' ],
		lang:     ['en'],
		dest:     'tmp',
		
		}
	 }


  });



   // Load the plugin that provides the "grunt-angular-gettext" task.
  grunt.loadNpmTasks('grunt-angular-translate');
 
  // Default task(s).
  grunt.registerTask('default', ['i18nextract']);


};
