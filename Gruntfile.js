module.exports = function (grunt) {
  // 具体构建任务的配置信息，主要包括：源文件、目标文件和配置参数
  grunt.initConfig({
    concat: {
    options: {
      separator: ';',
    },
    dist: {
      //打包文件
      src: ['main.js', 'util.js'],
      //目标文件
      dest: 'dist/bundle.js',
    },
  }, 
  });

  // 加载构建任务插件，每行加载一个插件，需要几个插件，写几行
  grunt.loadNpmTasks('grunt-contrib-concat');

  // 定义构建任务清单，可以有多个构建任务清单
  grunt.registerTask('default', ['concat']);
};
