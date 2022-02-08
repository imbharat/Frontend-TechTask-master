import React, { Component } from 'react';

class SearchErrorBoundary extends Component {
  
  state = {
    hasError: false
  }
  
  static getDerivedStateFromError(){
    return {
      hasError: true
    }
  }

  render() {
    if(this.state.hasError){
      return <div>Product Not Found</div>
    }
    return this.props.children
  }
}

export default SearchErrorBoundary;
