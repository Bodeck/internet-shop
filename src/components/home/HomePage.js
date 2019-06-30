import React, { Component } from 'react';

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
        <aside className="left-sidebar">

        </aside>
        <section className="products-section">
          <ProductList products={this.state.products} />
        </section>
      </div>
    );
  }
}

const ProductList = props => {
  const productList = props.products.map(product => {
    return (
      <div key={product.id}>
        <span>{product.name}</span>
        <span>{product.basePrice}</span>
      </div>
    )
  })

  return (
    <div className="product-list">
      {productList}
    </div>
  )
}
