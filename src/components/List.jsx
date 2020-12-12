import React from 'react';
import Card from "./Card";
import Pagination from "./Pagination";

const List = ({ list, filter, changeFilter }) => {
  return (
    <>
      <div className="row">
        { list.map(card => (
          <Card
            key={ card.id }
            title={ card.title }
            summary={ card.summary }
            img={ card.imageUrl }
            url={ card.url }
          />
        ))}
      </div>
      <Pagination
        limit={filter.limit}
        skip={filter.skip}
        changePage={changeFilter.bind(null, 'skip')}
      />
    </>
  );
};

export default List;
