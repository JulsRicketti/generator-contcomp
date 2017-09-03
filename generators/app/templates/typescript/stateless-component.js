import * as React from 'react'
<% if(!skipPropTypes) {%>import * as PropTypes from 'prop-types'<% } %>

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

export default <%= componentName%>Component