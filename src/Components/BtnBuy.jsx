import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BtnBuy = () => {
    const[product, setProduct] = useState([])
    const {id} = useParams()

    useEffect(() => {
        fetch('/DB/DBsementara.json')
        .then((response)=>{
            if(!response.ok){
                throw new Error('Network response was not ok')
            }
            return response.json()
        })
        .then((data)=>{
            const foundProduct = data.product.find((item) => item.id === id)
            setProduct(foundProduct)
        })
        .catch((error)=>console.error('Error fetching data:', error))
    },[id])

    const addToWishlist = () => {
        fetch('http://localhost:5000/api/addToWishlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        })
        .then(response => response.json())
        .then(data => {
            if(data.success){
                alert('Product added to wishlist')
            }
        })
        .catch((error) => {
            console.error('Error adding to wishlist:', error)
        })
    }

    const addToCart = () => {
        fetch('http://localhost:5000/api/addToCart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id:product.id, quantity: 1}),
        })
        .then(response => response.json())
        .then(data => {
            if(data.success){
                alert('Product added to Cart')
            }
        })
        .catch((error) => {
            console.error('Error adding to Cart:', error)
        })
    }
    return (
        <div className='flex bg-[#787878] rounded-[37px] font-poppins gap-3 w-[465px] pl-2'>
            <button className='share' onClick={addToCart}>
                <img src={`${process.env.PUBLIC_URL}/Image-Assets/svg/btn-cart.svg`} alt="share" width={65} />
            </button>
            <button className='like' onClick={addToWishlist}>
                <img src={`${process.env.PUBLIC_URL}/Image-Assets/svg/btn-like.svg`} alt="like" width={65} />
            </button>

            <button className='buttonforBuy flex bg-[#023E24] rounded-[37px] w-full px-2 py-2'>
                <div className='w-full pl-3 h-11'>
                    <p className='text-buy-now mt-2 text-white text-left text-[20px]'>
                        BUY NOW
                    </p>
                </div>

                    <div className='bg-white font-bold rounded-3xl h-11 w-full px-3 font-bold flex justify-center'>
                    <p className='price text-[16px] mt-2'>
                        Rp.{product.price},00
                    </p>
                </div>
            </button>
        </div>
    )
}

export default BtnBuy
