'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');

module.exports = class extends Generator {
  prompting() {
    const prompts = [{
      type: 'input',
      name: 'componentName',
      message: 'What is the name of your component?'
    },
    {
      type: 'confirm',
      name: 'hasRedux',
      message: 'Would you like to include the redux functions in your container?',
      default: false
    }
  ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    const { componentName, hasRedux } = this.props;
    this.fs.copyTpl(
      this.templatePath('component.js'),
      this.destinationPath(`components/${componentName}/component.js`),
      {componentName}
    );

    this.fs.copyTpl(
      this.templatePath('container.js'),
      this.destinationPath(`components/${componentName}/container.js`),
      {componentName, hasRedux}
    );

    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath(`components/${componentName}/index.js`),
      {componentName}
    );
  }
};
