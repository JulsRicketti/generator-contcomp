const React = require('react')
<% if(!skipPropTypes) {%>const PropTypes = require('prop-types')<% } %>

const <%= componentName%>Component = (props) => {
  return (
    <div>
      Insert your component's content here
    </div>
  )
}
<% if(!skipPropTypes) {%>
<%= componentName%>Component.propTypes = {
  /** propName: PropTypes.[type].[isRequired?] */
}<% } %>

module.exports = <%= componentName%>Component