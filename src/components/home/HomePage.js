import React, { Component } from 'react';
import { ProductList } from './ProductList';
import { SortingWidget } from './SortingWidget';
import './HomePage.css';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: "Product 1",
          basePrice: 122.00,
          discount: 0
        },
        {
          id: 2,
          name: "Product 2",
          basePrice: 122.00,
          discount: 0
        },
        {
          id: 3,
          name: "Product 3",
          basePrice: 122.00,
          discount: 0
        },
        {
          id: 4,
          name: "Product 1",
          basePrice: 122.00,
          discount: 0
        },
        {
          id: 5,
          name: "Product 2",
          basePrice: 122.00,
          discount: 0
        },
        {
          id: 6,
          name: "Product 3",
          basePrice: 122.00,
          discount: 0
        }
      ]
    }
  }

  render() {
    return (
      <div className="home-page">
        <div className="row">
          <aside className="col-3 left-sidebar">
            <SortingWidget />
          </aside>
          <section className="col-9 products-section">
            <ProductList products={this.state.products} />
          </section>
        </div>
      </div>
    );
  }
}
