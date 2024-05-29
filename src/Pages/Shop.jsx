import React, { useEffect, useState } from 'react'
import data from '../ConnectToDB/DBsementara.json'

const Shop = () => {
    const [activeButton, setActiveButton] = useState(null)
    const [product, setProduct] = useState([])

    const show = (category) => {
        setActiveButton(category)
    }

    useEffect(() => {
        setProduct(data.product)
    },[])

    const filterProduct = activeButton
    ? product.filter((item) => item.category === activeButton)
    : product

    if(!data) return <h1>Loading...</h1>

  return (
    <div className='flex mt-20 ml-5'>
      <div className='flex-none w-1/5 '>
        <div className='flex flex-col font-poppins'>
            <button onClick={() => show('vitamin')} className={`bg-soft-grey h-[40px] rounded-lg font-semibold ${
                activeButton === 'vitamin' ? 'bg-soft-gray text-black' : 'bg-white text-[#ADADAD]'
            }`}>Vitamin</button>
            <button onClick={() => show('farmer-tools')} className={`bg-soft-grey h-[40px] rounded-lg font-semibold ${
                activeButton === 'farmer-tools' ? 'bg-soft-gray text-black' : 'bg-white text-[#ADADAD]'
            }`}>Farmer Tools</button>
            <button onClick={() => show('accessories')} className={`bg-soft-grey h-[40px] rounded-lg font-semibold ${
                activeButton === 'accessories' ? 'bg-soft-gray text-black' : 'bg-white text-[#ADADAD]'
            }`}>Accessories</button>
            <button onClick={() => show('cattles')} className={`bg-soft-grey h-[40px] rounded-lg font-semibold ${
                activeButton === 'cattles' ? 'bg-soft-gray text-black' : 'bg-white text-[#ADADAD]'
            }`}>Cattles</button>
        </div>
      </div>
      <div className='flex-grow w-3/4 border-solid border-2 border-black'>
        <div className='grid grid-cols-1 md:grid-cols lg:grid-cols-3 gap-3'>
            {filterProduct.map((item) => (
                <div key={item.id} className='bg-white p-5'>
                    <img src={item.image} alt={item.name} className='w-full h-40 object-cover' />
                    <h1 className='font-semibold mt-2'>{item.name}</h1>
                    <p className='text-sm'>{item.description}</p>
                    <p className='font-semibold mt-2'>Rp {item.price}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Shop