import React from 'react';
import Header from "./Header";
import Card from "./Card";
import cardsList from './cards-list'

export default function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          { cardsList.map(card => (
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
