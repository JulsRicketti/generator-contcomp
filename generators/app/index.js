const Generator = require('yeoman-generator')

module.exports = class extends Generator {

  constructor (args, opts) {
    super(args, opts)

    // for setting up the configs:
    this.argument('destination-path', { type: String, required: false })
    this.argument('js-system', { type: String, required: false })

    // options (which are basically the flags)
    this.option('include-index')
  }

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
    ]

    return this.prompt(prompts).then(props => {
      this.props = props
    })
  }

  writing() {
    const {componentName, hasReactMethods, hasRedux} = this.props
    const jsSystem = this.config.get('jsSystem')
    const destinationPath = this.config.get('destinationPath')

    console.log('jsSystem:', jsSystem)
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

    if (this.config.get('includeIndex')) {
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
