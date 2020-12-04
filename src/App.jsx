import React, { useState, useEffect } from 'react';
import Header from "./Header";
import Card from "./Card";
import Filter from "./Filter";

const BASE_API_URL = 'https://test.spaceflightnewsapi.net/api/v2/articles'

function searchFilter({ title, summary }, search) {
  search = search.toLowerCase()
  return title.toLowerCase().includes(search) || summary.toLowerCase().includes(search);
}

function useFilter(initialFilter) {
  const [filter, setState] = useState(initialFilter)

  function changeFilter(key, value) {
    return setState({ ...filter, [key]: value })
  }


  return [filter, changeFilter]
}

export default function App() {
  const [filter, changeFilter] = useFilter({ search: '', limit: 5 })
  const [cardsList, updateCards] = useState([])
  useEffect(() => {
    fetch(`${BASE_API_URL}?_limit=${filter.limit}`)
      .then(response => response.json())
      .then(data => updateCards(data))
  }, [filter.limit])

  const cards = filter.search
    ? cardsList.filter((card) => searchFilter(card, filter.search))
    : cardsList

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
          { cards.map(card => (
            <div key={ card.id } className="col-lg-4 col-md-6 my-3">
              <Card
                className="h-100"
                title={ card.title }
                summary={ card.summary }
                img={ card.imageUrl }
                url={ card.url } />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
