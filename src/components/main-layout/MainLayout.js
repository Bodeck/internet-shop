import React, { Component } from 'react';
import Header from './Header';
import { Footer } from './Footer';

class MainLayout extends Component {
  render() {
    return (
      <div>
        <Header cartItemsCount={4} />
        <main className="container">
          {this.props.children}
        </main>
        <Footer />
      </div>
    )
  }
}

export default MainLayout;