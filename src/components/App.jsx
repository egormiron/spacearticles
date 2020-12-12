import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "./Header";
import Filter from "./Filter";
import Spinner from "./Spinner";
import List from "./List";

const BASE_API_URL = 'https://test.spaceflightnewsapi.net/api/v2/articles'

function useFilter(initialFilter) {
  const [ filter, setState ] = useState(initialFilter)

  function changeFilter(key, value) {
    return setState({ ...filter, skip: 0, [key]: value })
  }


  return [ filter, changeFilter ]
}

export default function App() {
  const [ filter, setFilter ] = useFilter({ search: '', limit: 5, skip: 0 })
  const [ list, setList ] = useState([])
  const [ isLoading, setLoading ] = useState(false)

  useEffect(() => {
    const search = filter.search.trim()
    setLoading(true)
    axios.get(BASE_API_URL, {
      params: {
        _start: filter.skip,
        _limit: filter.limit,
        title_contains: search,
        summary_contains: search
      }
    }).then(response => {
      setLoading(false)
      setList(response.data)
    })
  }, [ filter ])

  return (
    <>
      <Header/>
      <div className="container">
        <Filter
          filter={filter}
          changeFilter={setFilter}
        />
        {isLoading ?
          <Spinner/> :
          <List list={list} filter={filter} changeFilter={setFilter}/>
        }
      </div>
    </>
  )
}
