"use client";

import { FormEvent, useState } from 'react'
import Image from 'next/image'
import { useRouter} from 'next/navigation'

import { SearchManufacturer, SearchButton } from '.'

const SearchBar = () => {
  const router = useRouter()

  const [manufacturer, setManufacturer] = useState('')

  const [model, setModel] = useState('')

  const changeModel = (event: FormEvent<HTMLInputElement>) => {
    setModel((event.target as HTMLInputElement).value)
  }

  const updateSearchParams = (manufacturer: string, model: string) => {
    const searchParams = new URLSearchParams(location.search)

    manufacturer
      ? searchParams.set('manufacturer', manufacturer)
      : searchParams.delete('manufacturer')

      model
      ? searchParams.set('model', model)
      : searchParams.delete('model')

    const path = location.pathname.concat('?').concat(searchParams.toString())

    router.push(path)
  }

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (manufacturer === '' && model === '') {
      return alert('Please fill in the search bar')
    }

    updateSearchParams(manufacturer, model)
  }

  return (
    <form
      className="searchbar"
      onSubmit={handleSearch}
    >
      <div className="searchbar__item">
        <SearchManufacturer
          value={manufacturer}
          onChange={setManufacturer}
        />
        <SearchButton className="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          className="absolute w-[20px] h-[20px] ml-4"
          src="/model-icon.png"
          alt="Model"
          width={25}
          height={25}
        />
        <input
          className="searchbar__input"
          type="text"
          name="model"
          id="model"
          placeholder="Tiguan"
          value={model}
          onChange={changeModel}
        />
        <SearchButton className="sm:hidden" />
      </div>
      <SearchButton className="max-sm:hidden" />
    </form>
  )
}

export default SearchBar
