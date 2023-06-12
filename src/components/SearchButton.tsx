import Image from 'next/image'

export interface SearchButtonProps {
  className?: string;
}

const SearchButton = ({ className = '' }: SearchButtonProps) => {
  return (
    <button
      className={`-ml-3 z-10 ${className}`}
      type="submit"
    >
      <Image
        className="object-contain"
        src="/magnifying-glass.svg"
        alt="Search"
        width={40}
        height={40}
      />
    </button>
  )
}

export default SearchButton
