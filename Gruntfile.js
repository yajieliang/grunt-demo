module.exports = function (grunt) {
  // 具体构建任务的配置信息，主要包括：源文件、目标文件和配置参数
  grunt.initConfig({
    htmlmin: {                                   // Task
    dev: {                                      // Target
      options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
      },
      files: {                           // Dictionary of files
        'dist/index.html': 'index.html'  // 'destination': 'source'
      }
    }
  }  
  });

  // 加载构建任务插件，每行加载一个插件，需要几个插件，写几行
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // 定义构建任务清单，可以有多个构建任务清单
  grunt.registerTask('default', ['htmlmin:dev']);
};
