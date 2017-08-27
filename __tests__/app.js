
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-contcomp:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        componentName: 'Something',
        hasReactMethods: true,
        hasRedux: true
      });
  });

  it('creates files', () => {
    assert.file([
      'components/Something/component',
      'components/Something/container',
      'components/Something/index'
    ]);
  });
});
