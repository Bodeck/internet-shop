import React, { Component } from 'react';
import IosArrowRoundBack from 'react-ionicons/lib/IosArrowRoundBack';
import IosArrowRoundForward from 'react-ionicons/lib/IosArrowRoundForward';
import './Pagination.css';

export default class Pagination extends Component {
  renderPageNumbers(pageCount) {
    let pageNumbers = [];
    for (let i = 1; i <= pageCount; i++) {
      let pageNum = i < 10 ? '0' + i : i;
      pageNumbers.push(<li key={i} className="pagination-items"><a href="#" className="pagination-link">{pageNum}</a></li>);
    }
    return pageNumbers;
  }

  render() {
    return (
      <div className="pagination">
          <a className="pagination-btn" disabled={true} href="#">
            <IosArrowRoundBack fontSize="42px" />
          </a>
        <ul className="pages-list">
          {this.renderPageNumbers(this.props.pageCount)}
        </ul>
        <a className="pagination-btn" href="#">
          <IosArrowRoundForward fontSize="42px" />
        </a>
      </div>
    )
  }
}