const Generator = require('yeoman-generator')
const chalk = require('chalk')

module.exports = class extends Generator {

  constructor (args, opts) {
    super(args, opts)

    this.argument('destination-path', { 
      type: String,
      required: false,
      description: `Changes your generated files destination path. \nCurrent destination path: ${this.config.get('destination-path')}. \n${chalk.bold.red('Note: your new destination path will be saved.')}`,
      value: '/components'
    })
    this.argument('js-system', {
      type: String,
      required: false,
      description: `Choose the type of JavaScript module system you would like your generated. \nCurrent JS System: ${this.config.get('js-system')}.\n${chalk.blue('Available options: ES6, TypeScript and CommonJS')}. \n${chalk.bold.red('Note: your new JavaScript module system will be saved.')}`,
      value: 'TypeScript'
    })

    this.option('stateless-component', {
      description: 'Will generate a stateless component.',
      default: false
    })
    this.option('skip-proptypes', {
      description: 'Will not generate the propTypes.',
      default: false
    })
    this.option('skip-index', { 
      description: 'Will not generate an index.js file. Just the Component and Container.',
      default: false
    })
    this.option('add-react-methods', {
      description: 'Will generate React\'s lifecycle methods.',
      default: false
    })
    this.option('add-redux', {
      description: 'Will generate Redux methods in the container.',
      default: false
    })
  }

  prompting() {
    const prompts = [{
      type: 'input',
      name: 'componentName',
      message: 'What is the name of your component?'
    }]

    return this.prompt(prompts).then(props => {
      this.props = props
    })
  }

  handleJSSystem (option) {
    // TODO?
  }

  writing() {
    const {componentName} = this.props
    const availableJS = [ 'typescript', 'commonjs', 'es6' ]
    if (this.options['js-system']) {
      if (availableJS.indexOf(this.options['js-system'].toLowerCase()) !== -1) {
        this.config.set('js-system', this.options['js-system'])
      } else {
        this.log ('ERROR! Unavailable JS system. Please choose one of the following: ES6, TypeScript, CommonJS')
        this.log (`Current one: ${this.config.get('js-system')}`)
        return
      }
    }

    if (this.options['destination-path']){
      this.config.set('destination-path', this.options['destination-path'])
    }
    let jsSystem = this.config.get('js-system').toLowerCase()
    let destinationPath = this.config.get('destination-path').toLowerCase()

    const hasReactMethods = this.options['add-react-methods']
    const hasRedux = this.options['add-redux']
    const skipPropTypes = this.options['skip-proptypes']
    const useStatelessComponent = this.options['stateless-component']

    const component = useStatelessComponent ? 'stateless-component.js' : 'component.js'
    this.fs.copyTpl(
      this.templatePath(`${jsSystem}/${component}`),
      this.destinationPath(`${destinationPath}/${componentName}/component.js`),
      { componentName, hasReactMethods, skipPropTypes }
    )
    
    this.fs.copyTpl(
      this.templatePath(`${jsSystem}/container.js`),
      this.destinationPath(`${destinationPath}/${componentName}/container.js`),
      { componentName, hasReactMethods, hasRedux, skipPropTypes }
    )

    if (!this.options['skip-index']) {
      this.fs.copyTpl(
        this.templatePath(`${jsSystem}/index.js`),
        this.destinationPath(`${destinationPath}/${componentName}/index.js`),
        {componentName}
      )
    }
  }

  // install() {
  //   this.installDependencies()
  // }
}
