import React, { Component } from 'react';
import Header from './Header';
import { Footer } from './Footer';

class MainLayout extends Component {
  render() {
    return (
      <div>
        <Header cartItemsCount={15} />
        <main className="container">
          {this.props.children}
        </main>
        <Footer />
      </div>
    )
  }
}

export default MainLayout;