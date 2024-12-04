import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[#F2F0F1] flex'>
      <div className=''>
        <h1 className='text-4xl'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        <button>Shop Now</button>
        <div className='flex'>
            <div>
                <strong>200+</strong>
                <p>International Brands</p>
            </div>
            <div>
                <strong>2000+</strong>
                <p>High Quality Product</p>
            </div>
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
