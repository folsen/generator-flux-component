var generators = require('yeoman-generator');

module.exports = generators.NamedBase.extend({
  constructor: function() {
    generators.Base.apply(this, arguments);
  },
  generate: function () {
    if (arguments[0] === undefined) {
      console.log('USAGE: yo flux-component ComponentName');
      return;
    }
    var name = arguments[0];

    console.log('Generating component ' + name);

    var jsFile      = 'src/components/'+name+'/'+name+'.js';
    var lessFile    = 'src/components/'+name+'/'+name+'.less';
    var packageFile = 'src/components/'+name+'/package.json';

    var context = {name: name};
    this.template('Component.js', jsFile, context);
    this.template('Component.less', lessFile, context);
    this.template('package.json', packageFile, context);
  }
});
