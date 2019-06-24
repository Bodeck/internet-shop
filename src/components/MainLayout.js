import React, {Component} from 'react';
import Header from './Header';

class MainLayout extends Component {
  render() {
    return (
    <div>
      <Header pageName="This is test"/>
      {this.props.children}
    </div>
    )
  }
}

export default MainLayout;