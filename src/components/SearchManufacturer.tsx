"use client"

import Image from 'next/image'
import { ChangeEvent, useState, useMemo, Fragment } from 'react'

import { Combobox, Transition } from '@headlessui/react'

import { manufacturers } from '@/constants'

export interface SearchManufacturerProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchManufacturer = ({ value, onChange }: SearchManufacturerProps) => {
  const [query, setQuery] = useState('')

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const resetQuery = () => {
    setQuery('')
  }

  const filteredManufacturers = useMemo(() => (
    query === ''
      ? manufacturers
      : manufacturers.filter((manufacturer) => manufacturer.toLowerCase().includes(query.toLowerCase()))
  ), [query])

  return (
    <div className="search-manufacturer">
      <Combobox
        value={value}
        onChange={onChange}
      >
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              className="ml-4"
              src="/car-logo.svg"
              alt="Manufacturer"
              width={20}
              height={20}
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(value: string) => value}
            onChange={handleQueryChange}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={resetQuery}
          >
            <Combobox.Options>
              {filteredManufacturers.map((manufacturer) => (
                <Combobox.Option
                  className={({ active }) => `search-manufacturer__option relative ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                  key={manufacturer}
                  value={manufacturer}
                >
                  {({ selected, active }) => (
                    <Fragment>
                      <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                        {manufacturer}
                      </span>
                      {selected
                        ? <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'}`} />
                        : null}
                    </Fragment>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer
