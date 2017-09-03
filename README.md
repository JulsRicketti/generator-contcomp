# generator-contcomp [![NPM version][npm-image]][https://www.npmjs.com/package/generator-contcomp] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> A simple container-component pattern generator for ReactJS components.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-contcomp using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-contcomp
```

Then generate your new project:

```bash
yo contcomp
```

## Usage instructions:

Simply run the generator, which will proceed to ask for the name of the component.

By default, the generator will create a folder with the chosen component name. In it we will have `component.js`, `container.js` and `index.js` with the recommended default boilerplate code. This code may be changed using the different flags contcomp generator offers. 

```
├── destinationFolder           # Destination path folder
    ├── ComponentName           # Generated folder
    │   ├── component.js        # Generated component file
    │   ├── container.js        # Generated container file
    │   ├── index.js            # Generated index file
```

The generator allows for some flexibility through it's options and arguments. Their details are described in contcomp's help:

`yo contcomp -h`

```Usage:
  yo contcomp:app [options] [<destination-path>] [<js-system>]

Options:
  -h,   --help                 # Print the generator's options and usage
        --skip-cache           # Do not remember prompt answers                                         Default: false
        --skip-install         # Do not automatically install dependencies                              Default: false
        --stateless-component  # Will generate a stateless component.                                   Default: false
        --skip-proptypes       # Will not generate the propTypes.                                       Default: false
        --skip-index           # Will not generate an index.js file. Just the Component and Container.  Default: false
        --add-react-methods    # Will generate React's lifecycle methods.                               Default: false
        --add-redux            # Will generate Redux methods in the container.                          Default: false

Arguments:
  destination-path  # Changes your generated files destination path.
Current destination path: components/blah.
Note: your new destination path will be saved.                                                                                     Type:
 String  Required: false
  js-system         # Choose the type of JavaScript module system you would like your generated.
Current JS System: typescript.
Available options: ES6, TypeScript and CommonJS.
Note: your new JavaScript module system will be saved.  Type: String  Required: false
```



## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [JulsRicketti]()


[npm-image]: https://badge.fury.io/js/generator-contcomp.svg
[npm-url]: https://npmjs.org/package/generator-contcomp
[travis-image]: https://travis-ci.org/JulsRicketti/generator-contcomp.svg?branch=master
[travis-url]: https://travis-ci.org/JulsRicketti/generator-contcomp
[daviddm-image]: https://david-dm.org/JulsRicketti/generator-contcomp.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/JulsRicketti/generator-contcomp
[coveralls-image]: https://coveralls.io/repos/JulsRicketti/generator-contcomp/badge.svg
[coveralls-url]: https://coveralls.io/r/JulsRicketti/generator-contcomp
