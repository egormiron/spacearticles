import React from 'react';

export default class Filter extends React.Component {
  onSearchChange = (event) => {
    this.props.changeFilter(event.target.name, event.target.value)
  }

  onLimitChange = (event) => {
    this.props.changeFilter(event.target.name, Number(event.target.value))
  }

  render() {
    return (
      <form className="form-row justify-content-between">
        <div className="col-5">
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="form-control"
            value={this.props.search}
            onChange={this.onSearchChange}/>
        </div>
        <div className="col-2 offset-5">
          <select
            name="limit"
            className="form-control"
            value={this.props.limit}
            onChange={this.onLimitChange}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </div>
      </form>
    )
  }
}
