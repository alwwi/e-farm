import React, { useEffect, useState } from 'react'

const Cart = () => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('/DB/DBsementara.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                return response.json()
            })
            .then((data) => {
                if(Array.isArray(data.cart)){
                    setCart(data.cart)
                }else{
                    console.error('Data is not an array')
                }
            })
            .catch((error) => console.error('Error fetching data:', error))
    })

    const updateQuantity = (id, quantity) => {
        fetch('http://localhost:5000/api/updateCart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, quantity }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                return response.json()
            })
            .then(() => {
                setCart((prevCart) =>
                    prevCart.map((item) =>
                        item.id === id ? { ...item, quantity } : item
                    )
                )
            })
            .catch((error) => {
                console.error('Error updating cart:', error)
            })
    }

    const removeFromCart = (id) => {
        fetch('http://localhost:5000/api/removeFromCart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                return response.json()
            })
            .then(() => {
                setCart((prevCart) => prevCart.filter((item) => item.id !== id))
            })
            .catch((error) => {
                console.error('Error removing from cart:', error)
            })
    }
    return (
        <div className='mt-28 px-56 font-poppins'>
            <div className='w-full border-b-2 border-black text-left'>
                <h3>My Cart</h3>
            </div>

            <div className='gap-6 mt-4 px-4'>
                {cart.map((post) => (
                    <div className='flex relative rounded-[21px]' key={post.id}>
                        <div className='grid grid-cols-3 border-2 w-[90%] z-10 bg-white rounded-[21px] shadow-card relative'>
                            <div className='img w-[150px] p-2'>
                                <img src={post.image} className='rounded-s-[21px]' alt="" />
                            </div>
                            <div className='text-left py-4'>
                                <h4>{post.name}</h4><br />
                                <h4 className='font-bold'>Rp.{post.price},00</h4>
                            </div>
                            <div className='button flex gap-2 absolute right-10 top-14'>
                                <div className='decrement'>
                                    <button onClick={() =>updateQuantity (post.id,post.quantity -1)} disabled={post.quantity <= 1}>
                                        <img src={`${process.env.PUBLIC_URL}Image-Assets/svg/decrement.svg`} alt="btn-decrement" />
                                    </button>
                                </div>
                                <div className='total font-semibold text-xl'>
                                    <p>{post.quantity}</p>
                                </div>
                                <div className='increment'>
                                    <button onClick={() => updateQuantity(post.id,post.quantity +1)}>
                                        <img src={`${process.env.PUBLIC_URL}Image-Assets/svg/increment.svg`} alt="btn-increment" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <button className='trash bg-red-500 w-[10%] absolute right-4 z-0 h-full rounded-e-[21px] shadow-card'
                        onClick={()=> removeFromCart(post.id)}>
                            <div className='my-14 mx-8'>
                                <img src={`${process.env.PUBLIC_URL}Image-Assets/svg/trash.svg`} alt="" />
                            </div>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cart
