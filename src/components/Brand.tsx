import Link from 'next/link'
import Image from 'next/image'

const Brand = () => {
  return (
    <Link
      className="flex justify-center items-center"
      href="/"
    >
      <Image
        className="object-contain"
        src="/logo.svg"
        alt="CarHub"
        width={118}
        height={18}
      />
    </Link>
  )
}

export default Brand
