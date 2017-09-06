# generator-contcomp [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
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

Simply run the generator, it will proceed to ask three questions:

- Component name
- Destination folder, which is where the generated files should go (default: components)
- Which JavaScript module system to use:
  - ES6 (default)
  - TypeScript
  - CommonJS

The generator will create a folder with the chosen component name. In it we will have `component.js`, `container.js` and `index.js` with the recommended default boilerplate code. This code may be changed using the different flags contcomp generator offers. 

```
├── destinationFolder           # Destination path folder
    ├── ComponentName           # Generated folder
    │   ├── component.js        # Generated component file
    │   ├── container.js        # Generated container file
    │   ├── index.js            # Generated index file
```

The generator has a few options such as the inclusion of redux functions, react lifecycle methods and statless components. Their details are described in contcomp's help:

`yo contcomp -h`

```Usage:
Usage:
  yo contcomp:app [options]

Options:
  -h,   --help                 # Print the generator's options and usage
        --skip-cache           # Do not remember prompt answers                                         Default: false
        --skip-install         # Do not automatically install dependencies                              Default: false
        --stateless-component  # Will generate a stateless component.                                   Default: false
        --skip-proptypes       # Will not generate the propTypes.                                       Default: false
        --skip-index           # Will not generate an index.js file. Just the Component and Container.  Default: false
        --add-react-methods    # Will generate React's lifecycle methods.                               Default: false
        --add-redux            # Will generate Redux methods in the container.                          Default: false
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
