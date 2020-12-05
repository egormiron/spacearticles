import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "./Header";
import Card from "./Card";
import Filter from "./Filter";
import Pagination from "./Pagination";

const BASE_API_URL = 'https://test.spaceflightnewsapi.net/api/v2/articles'

function useFilter(initialFilter) {
  const [filter, setState] = useState(initialFilter)

  function changeFilter(key, value) {
    return setState({ ...filter, skip: 0, [key]: value })
  }


  return [filter, changeFilter]
}

export default function App() {
  const [filter, changeFilter] = useFilter({ search: '', limit: 5, skip: 0 })
  const [list, updateCards] = useState([])

  useEffect(() => {
    const search = filter.search.trim()

    axios.get(BASE_API_URL, { params: {
        _start: filter.skip,
        _limit: filter.limit,
        title_contains: search,
        summary_contains: search
      } }).then(response => updateCards(response.data))
  }, [filter])

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Filter
              filter={filter}
              changeFilter={changeFilter}
            />
          </div>
        </div>
        <div className="row">
          { list.map(card => (
            <div key={ card.id } className="col-lg-4 col-md-6 my-3">
              <Card
                className="h-100"
                title={ card.title }
                summary={ card.summary }
                img={ card.imageUrl }
                url={ card.url }
              />
            </div>
          ))}
        </div>
        <Pagination
          limit={filter.limit}
          skip={filter.skip}
          changePage={changeFilter.bind(null, 'skip')}
        />
      </div>
    </div>
  )
}
