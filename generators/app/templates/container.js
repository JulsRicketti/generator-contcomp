import * as React from 'react'
import <%= componentName%>Component from './component'
<% if (hasRedux) { %>
import { connect } from 'react-redux'
<% }%>

<% if (!hasRedux) { %>export default<% }%> class <%= componentName%>Container extends React.Component {
  render () {
    return (
      <<%= componentName%>Component />
    )
  }
}

<% if (hasRedux) { %>
const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(<%= componentName%>Container)
<% } %>