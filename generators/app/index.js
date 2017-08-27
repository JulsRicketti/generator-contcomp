const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting() {
    const prompts = [{
      type: 'input',
      name: 'componentName',
      message: 'What is the name of your component?'
    },
    {
      type: 'confirm',
      name: 'hasReactMethods',
      message: 'Would you like us to include the React lifecycle methods?',
      default: true
    },
    {
      type: 'confirm',
      name: 'hasRedux',
      message: 'Would you like to include the redux functions in your container?',
      default: true
    }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    const {componentName, hasReactMethods, hasRedux} = this.props;

    this.fs.copyTpl(
      this.templatePath('component.js'),
      this.destinationPath(`components/${componentName}/component.js`),
      {componentName, hasReactMethods}
    );

    this.fs.copyTpl(
      this.templatePath('container.js'),
      this.destinationPath(`components/${componentName}/container.js`),
      {componentName, hasReactMethods, hasRedux}
    );

    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath(`components/${componentName}/index.js`),
      {componentName}
    );
  }
};
