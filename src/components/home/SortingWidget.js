import React, { Component } from 'react';

export class SortingWidget extends Component {
  handleOnClick(e) {
    e.preventDefault();
    console.log(e.target);
  }
  render() {
    return (
      <div className="sort-widget">
        <div className="widget-header">Sort Product:</div>
        <ul className="sort-button-list">
          <li><a href="" className="sort-button"
            onClick={e => this.handleOnClick(e)}
          >Product Name A-Z</a></li>
          <li><a href="" className="sort-button"
            onClick={e => this.handleOnClick(e)}
          >Product Name Z-A</a></li>
          <li><a href="" className="sort-button"
            onClick={e => this.handleOnClick(e)}
          >Price Ascending</a></li>
          <li><a href="" className="sort-button" onClick={e => this.handleOnClick(e)}
          >Price Descending</a></li>
        </ul>
      </div>
    );
  }
}