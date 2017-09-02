const Generator = require('yeoman-generator')

module.exports = class extends Generator {

  constructor (args, opts) {
    super(args, opts)

    // for setting up the configs:
    this.argument('destination-path', { 
      type: String,
      required: false,
      description: 'Changes your generated files destination path.',
      value: '/components'
    })
    this.argument('js-system', {
      type: String,
      required: false,
      description: 'Choose the type of JavaScript you would like your generated. Available options: ES6, TypeScript and CommonJS.',
      value: 'TypeScript'
    })

    // options (which are basically the flags)
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

  writing() {
    const {componentName} = this.props
    const jsSystem = this.config.get('jsSystem')
    const destinationPath = this.config.get('destinationPath')

    const hasReactMethods = this.options['add-react-methods']
    const hasRedux = this.options['add-redux']

    this.fs.copyTpl(
      this.templatePath(`${jsSystem}/component.js`),
      this.destinationPath(`${destinationPath}/${componentName}/component.js`),
      {componentName, hasReactMethods}
    )
    
    this.fs.copyTpl(
      this.templatePath(`${jsSystem}/container.js`),
      this.destinationPath(`${destinationPath}/${componentName}/container.js`),
      {componentName, hasReactMethods, hasRedux}
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
