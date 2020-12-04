import React from 'react';

export default class Filter extends React.Component {
  onChange = (event) => {
    this.props.changeFilter(event.target.name, event.target.value.trim())
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
            onChange={this.onChange}/>
        </div>
        <div className="col-1 offset-6">
          <select
            name="limit"
            className="form-control"
            value={this.props.limit}
            onChange={this.onChange}>
            <option>5</option>
            <option>10</option>
            <option>15</option>
          </select>
        </div>
      </form>
    )
  }
}
