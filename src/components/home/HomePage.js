import React, { Component } from 'react';
import ProductListContainer from '../../containers/ProductList';
import { SortingWidget } from './SortingWidget';
import './HomePage.css';
import Pagination from './Pagination';

export default class HomePage extends Component {

  render() {
    return (
      <div className="home-page">
        <div className="row">
          <aside className="col-3 left-sidebar">
            <SortingWidget />
          </aside>
          <section className="col-9 products-section">
            <ProductListContainer />
            <Pagination pageCount={5} />
          </section>
        </div>
      </div>
    );
  }
}
