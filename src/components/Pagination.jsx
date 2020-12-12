import React from 'react';

export default function Pagination ({ limit, skip, changePage }) {
  function onPrevClick (e) {
    e.preventDefault();
    changePage(Math.max(skip - limit, 0))
  }

  function onNextClick (e) {
    e.preventDefault();
    changePage(limit + skip)
  }

  return (
    <ul className="pagination">
      <li className={ `page-item ${ skip === 0 ? 'disabled' : '' }` }>
        <a href="#" className="page-link" onClick={ onPrevClick }>Previous</a>
      </li>
      <li className="page-item">
        <a href="#" className="page-link" onClick={ onNextClick }>Next</a>
      </li>
    </ul>
  )
}
