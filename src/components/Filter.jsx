import React, { useCallback } from 'react';
import debounce from 'lodash.debounce';

export default function Filter({ search, limit, changeFilter }) {
  const debounceChangeFilter = useCallback(debounce((value) => changeFilter('search', value), 1000), [])

  const onSearchChange = (event) => {
    debounceChangeFilter(event.target.value)
  }

  const onLimitChange = (event) => {
    changeFilter(event.target.name, Number(event.target.value))
  }

  return (
    <form className="form-row">
      <div className="col-5">
        <input
          type="text"
          name="search"
          placeholder="Search"
          className="form-control"
          value={search}
          onChange={onSearchChange}/>
      </div>
      <div className="col-2 offset-5">
        <select
          name="limit"
          className="form-control"
          value={limit}
          onChange={onLimitChange}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>
    </form>
  )
}
