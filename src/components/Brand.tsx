import Link from 'next/link'

import { Logo } from '.'

const Brand = () => {
  return (
    <Link
      className="flex justify-center items-center"
      href="/"
    >
      <Logo />
    </Link>
  )
}

export default Brand
