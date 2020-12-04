import React from 'react';
import Header from "./Header";
import Card from "./Card";

const card = {
  title: 'China releases a super-clear image of the Moon taken by Chang’e 5 probe',
  summary: 'There’s also video showing the descent of the spacecraft.',
  img: 'https://cdn.arstechnica.net/wp-content/uploads/2020/12/5386897742-JwCDRjkmU.jpg',
  url: 'https://arstechnica.com/science/2020/12/china-releases-a-super-clear-image-of-the-moon-taken-by-change-5-probe/'
}

export default function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Card title={ card.title } summary={ card.summary } img={ card.img } url={ card.url } />
          </div>
        </div>
      </div>
    </div>
  )
}
