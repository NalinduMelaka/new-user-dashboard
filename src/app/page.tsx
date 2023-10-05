import Image from 'next/image'
import Link from 'next/link'
import PDFComponent from './components/PDFComponent'
import '../../public/img1.png'
import '../../public/logo.jpg'

export default function Home() {
  return (
    <div className='flex justify-evenly w-full h-full bg-slate-500 relative'>
      <Image
        src="/img1.png"  // Path to your garden background image
        alt="Garden Background"
        
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className='absolute inset-0 bg-black opacity-50'></div> {/* Overlay to darken the image */}
      <div className='relative z-10 p-8 text-white'>
        <h1 className='text-4xl font-bold mb-4'>Welcome to OCEANEDGE FASHIONS Order management system</h1>
        <div className="flex justify-center items-center">
        <Image 
        src='/logo.jpg'
        alt='logo'
        width={300}
        height={300}

        />
        </div>
      </div>
    </div>
  )
}
