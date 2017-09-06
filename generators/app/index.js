const Generator = require('yeoman-generator');
const chalk = require('chalk');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('stateless-component', {
      description: 'Will generate a stateless component.',
      default: false
    });
    this.option('skip-proptypes', {
      description: 'Will not generate the propTypes.',
      default: false
    });
    this.option('skip-index', {
      description: 'Will not generate an index.js file. Just the Component and Container.',
      default: false
    });
    this.option('add-react-methods', {
      description: 'Will generate React\'s lifecycle methods.',
      default: false
    });
    this.option('add-redux', {
      description: 'Will generate Redux methods in the container.',
      default: false
    });
  }

  prompting() {
    const prompts = [{
      type: 'input',
      name: 'componentName',
      message: 'What is the name of your component?'
    },
    {
      type: 'input',
      name: 'destinationPath',
      message: 'What is the path where the generated components will go?',
      default: 'components',
      store: true
    },
    {
      type: 'list',
      name: 'jsSystem',
      message: 'What JavaScript module system would you like to use?',
      choices: ['ES6', 'TypeScript', 'CommonJS'],
      default: 'ES6',
      store: true
    }];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    const {componentName, destinationPath, jsSystem} = this.props;

    const hasReactMethods = this.options['add-react-methods'];
    const hasRedux = this.options['add-redux'];
    const skipPropTypes = this.options['skip-proptypes'];
    const useStatelessComponent = this.options['stateless-component'];

    const component = useStatelessComponent ? 'stateless-component.js' : 'component.js';
    this.fs.copyTpl(
      this.templatePath(`${jsSystem}/${component}`),
      this.destinationPath(`${destinationPath}/${componentName}/component.js`),
      {componentName, hasReactMethods, skipPropTypes}
    );

    this.fs.copyTpl(
      this.templatePath(`${jsSystem}/container.js`),
      this.destinationPath(`${destinationPath}/${componentName}/container.js`),
      {componentName, hasReactMethods, hasRedux, skipPropTypes}
    );

    if (!this.options['skip-index']) {
      this.fs.copyTpl(
        this.templatePath(`${jsSystem}/index.js`),
        this.destinationPath(`${destinationPath}/${componentName}/index.js`),
        {componentName}
      );
    }
  }

  Install() {
    this.installDependencies()
  }
};
