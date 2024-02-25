import Link from 'next/link'
import errorPage from '../public/Img/error.jpg'
import Image from 'next/image'
export default function NotFound() {
  return (
    <div className=' flex flex-col items-center' >
          <Image
      src={errorPage}
      width={500}
      height={500}
      alt="Picture of the author"
    />
      
      <Link href="/" className='btn bg-red-500 text-white'>Return Home</Link>
    </div>
  )
}