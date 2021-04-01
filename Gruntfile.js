module.exports = (grunt) => {
  grunt.initConfig({
  less: {
    compiled:{
      files: {
        'dist/compiled.css': 'css/layout.less'
      }
    }
  }
  

  });
 
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', ['less:compiled']);
};

