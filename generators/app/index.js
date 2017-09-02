const Generator = require('yeoman-generator')

module.exports = class extends Generator {

  constructor (args, opts) {
    super(args, opts)

    // for setting up the configs:
    this.argument('destination-path', { 
      type: String,
      required: false,
      description: `Changes your generated files destination path. Current destination path: ${this.config.get('destinationPath')}`,
      value: '/components'
    })
    this.argument('js-system', {
      type: String,
      required: false,
      description: `Choose the type of JavaScript you would like your generated. Available options: ES6, TypeScript and CommonJS. Current JS System: ${this.config.get('jsSystem')}`,
      value: 'TypeScript'
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

  writing() {
    const {componentName} = this.props
    const availableJS = [ 'typescript', 'commonjs', 'es6' ]
    if (this.options['js-system']) {
      if (availableJS.indexOf(this.options['js-system'].toLowerCase()) !== -1) {
        this.config.set('jsSystem', this.options['js-system'])
      } else {
        this.log ('ERROR! Unavailable JS system. Please choose one of the following: ES6, TypeScript, CommonJS')
        this.log (`Current one: ${this.config.get('jsSystem')}`)
        return
      }
    }

    if (this.options['destination-path']){
      this.config.set('destinationPath', this.options['destination-path'])
    }
    let jsSystem = this.config.get('jsSystem').toLowerCase()
    let destinationPath = this.config.get('destinationPath').toLowerCase()

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
