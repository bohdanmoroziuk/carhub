"use client";

import { useState } from 'react'

import { SearchManufacturer } from '.'

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('')

  return (
    <form
      className="searchbar"
      onSubmit={() => {}}
    >
      <div className="searchbar__item">
        <SearchManufacturer
          value={manufacturer}
          onChange={setManufacturer}
        />
      </div>
    </form>
  )
}

export default SearchBar
