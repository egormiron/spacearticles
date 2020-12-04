import React, { useState } from 'react';
import Header from "./Header";
import Card from "./Card";
import cardsList from './cards-list'
import Filter from "./Filter";

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

  let cards = cardsList.slice(0, filter.limit);

  if (filter.search.length) {
    cards = cards.filter((card) => searchFilter(card, filter.search))
  }

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
            <div key={ card.id } className="col-4 my-3">
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
