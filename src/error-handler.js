import React from "react"


// logic pulled from https://flaviocopes.com/react-handle-errors/
export default class ErrorHandler extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
    	errorOccurred: false 
    };
  }

  componentDidCatch(error, info) {
    this.setState({ 
    	errorOccurred: true 
    });
    console.log(error, info);
  }

  render() {
    return this.state.errorOccurred ? <h1>Something went wrong!</h1> : this.props.children
  }
}