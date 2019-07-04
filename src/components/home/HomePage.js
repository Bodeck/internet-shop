import React, { Component } from 'react';
import { ProductList } from './ProductList';
import { SortingWidget } from './SortingWidget';
import './HomePage.css';
import Pagination from './Pagination';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: "SuperOpticon 2000",
          basePrice: 12.00,
          description: "Sample product description. Product description placeholder.",
          advertMessage: "Extra deal"
        },
        {
          id: 2,
          name: "SunBlaster Light",
          basePrice: 60.00,
          description: "Sample product description. Product description placeholder.",
          advertMessage: "New collection!"
        },
        {
          id: 3,
          name: "Karina XL",
          basePrice: 122.00,
          description: "Sample product description. Product description placeholder.",
        },
        {
          id: 4,
          name: "Panama Jack",
          basePrice: 120.00,
          description: "Sample product description. Product description placeholder.",
        },
        {
          id: 5,
          name: "Blackhole Sun",
          basePrice: 122.00,
          description: "Sample product description. Product description placeholder.",
          advertMessage: "Bestseller"
        },
        {
          id: 6,
          name: "Arnold",
          basePrice: 122.00,
          description: "Sample product description. Product description placeholder.",
        }
      ],
      favouriteList: [1, 6,]
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
            <Pagination pageCount={5} />
          </section>
        </div>
      </div>
    );
  }
}
