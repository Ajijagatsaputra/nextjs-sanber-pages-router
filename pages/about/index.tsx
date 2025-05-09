// import Image from 'next/image'
import ImgHigh from '@/assets/logo-fashion.png'

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      {/* <Image
        src="/logo-fashion.png"
        alt="logo"
        width={1000}
        height={800}
        className="object-cover"
        priority
      /> */}
      <img {...ImgHigh} />
    </div>
  )
}
