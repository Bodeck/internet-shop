import React, { Component } from 'react';
import Header from './Header';

class MainLayout extends Component {
  render() {
    return (
      <div>
        <Header pageName="This is test" />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default MainLayout;