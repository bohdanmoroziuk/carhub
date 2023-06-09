import Image from 'next/image'

const Logo = () => {
  return (
    <Image
      className="object-contain"
      src="/logo.svg"
      alt="CarHub"
      width={118}
      height={18}
    />
  )
}

export default Logo
