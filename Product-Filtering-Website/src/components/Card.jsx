import React from 'react'

function Card() {
  return (
    <div className='rounded-lg p-3 bg-slate-900 w-fit'>
        <div>
            <img src="https://kicks-ecommerce-store.vercel.app/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdivyanshu08%2Fimage%2Fupload%2Fv1698677650%2Fkicks%2Fuif5xqjip3joyugblodx.webp&w=1920&q=75" 
            alt="" className='rounded-lg w-[270px]' />
        </div>
        <p className='text-2xl font-bold'>puma redhorse</p>
        <p>puma</p>
    </div>
  )
}

export default Card