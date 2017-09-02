const React = require('react')
const <%= componentName%>Component = require('./component')

class <%= componentName%>Container extends React.Component {
  <% if(hasReactMethods) {%>
    constructor (props) {
      super(props)
      
      this.state = {
      }
    }
  
    componentWillMount () {
      /** Is invoked immediately before mounting occurs. */
    }
  
    componentDidMount () {
      /**Is invoked immediately after the component has mounted. */
    }
  
    componentWillReceiveProps (nextProps) {
      /**Is invoked before a mounted component received new props. */
    }
  
    shouldComponentUpdate (nextProps, nextState) {
      /**Is usually used to let React know if a component's output is not affected
       * by a current change of state or props.
       */
    }
  
    componentWillUpdate (nextProps, nextState) {
      /**Is invoked immediately before rendering when new props or state are
       * being received.
       */
    }
  
    componentDidUpdate (prevProps, prevState) {
      /**Is invoked immediately after updating occurs. */
    }
  
    componentWillUnmount () {
      /**Is invoked immediately before a component is unmounted and destroyed. */
    }
  <% } %>
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

module.exports = connect(mapStateToProps, mapDispatchToProps)(<%= componentName%>Container)