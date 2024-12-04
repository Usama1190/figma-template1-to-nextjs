import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[#F2F0F1] flex p-14'>
      <div className='w-[464px]'>
        <h1 className='text-4xl font-bold text-black'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p className='text-sm mt-4'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        <button className='bg-black text-white py-2 px-12 rounded-full'>Shop Now</button>
        <div className='flex'>
            <div>
                <strong>200+</strong>
                <p>International Brands</p>
            </div>
            <div className='border-2 border-gray-950 rounded-xl'></div>
            <div>
                <strong>2000+</strong>
                <p>High Quality Product</p>
            </div>
            <div className='border-2 border-gray-950 rounded-xl'></div>
            <div>
                <strong>30,000+</strong>
                <p>Happy Customers</p>
            </div>
        </div>
      </div>

      <div>
        {/* <Image src={''} alt='Men ware cloths' /> */}
      </div>
    </div>
  )
}

export default Hero
