const React = require('react')
const <%= componentName%>Component = require('./component')

const <%= componentName%>Container = React.createClass({
  render: function() {
    return (
      <div>
        <<%= componentName%>Component />
      </div>
    )
  }
})

module.exports = <%= componentName%>Container