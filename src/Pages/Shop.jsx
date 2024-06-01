import React, { useEffect, useState } from 'react'
import data from '../ConnectToDB/DBsementara.json'
import { Link } from 'react-router-dom'

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
      <div className='flex-grow w-3/4 px-5'>
        <div className='grid grid-cols-5'>
            {filterProduct.map((item) => (
                <Link to={`/item/${item.id}`} key={item.id} className='cursor-pointer focus:bg-red px-2 shadow-card flex flex-col rounded-[21px] text-left font-poppins h-[270px] w-[190px] relative pt-1'>
                    <img src={item.image} alt={item.name} className='w-full h-[150px]'/>
                    <p className='font-medium mt-3 float-left text-[13px]'>{item.name}</p>
                    <p className='font-semibold float-left text-[14px]'>Rp {item.price},00</p>
                    <p className='text-[10px] absolute bottom-0'>{item.location}</p>
                </Link>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Shop