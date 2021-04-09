module.exports = function (grunt) {
  // 具体构建任务的配置信息，主要包括：源文件、目标文件和配置参数
  grunt.initConfig({
    sprite: {
      all: {
        src: 'images/*.png',
        dest: 'dist/bundle.png',
        destCss: 'dist/sprites.css'
      }
    } 
  });

  // 加载构建任务插件，每行加载一个插件，需要几个插件，写几行
    grunt.loadNpmTasks('grunt-spritesmith');

    grunt.registerTask('default', ['sprite']);
  };
