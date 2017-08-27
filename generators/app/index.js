'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');

module.exports = class extends Generator {
  prompting() {
    const prompts = [{
      type: 'input',
      name: 'componentName',
      message: 'What is the name of your component?',
    }];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    const {componentName} = this.props
    this.fs.copyTpl(
      this.templatePath('component.js'),
      this.destinationPath(`components/${componentName}/component.js`),
      { componentName }
    )

    this.fs.copyTpl(
      this.templatePath('container.js'),
      this.destinationPath(`components/${componentName}/container.js`),
      { componentName }
    )

    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath(`components/${componentName}/index.js`),
      { componentName }
    )
  }
};
