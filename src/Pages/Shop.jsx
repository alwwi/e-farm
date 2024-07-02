import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db,ref, onValue } from '../ConnectToDB/Firebase-config';

const Shop = ({ data }) => {
    const [activeButton, setActiveButton] = useState(null);
    const [product, setProduct] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [cart, setCart] = useState([]);
    const [sideBarOpen, setSideBarOpen] = useState(false);

    useEffect(() => {
        if (data) {
            setProduct(data);
            setWishlist(data.filter(item => item.isWishlist));
            setCart(data.filter(item => item.isCart));
        }

        const wishlistRef = ref(db, 'wishlist');

        const unsubscribe = onValue(wishlistRef, (snapshot) => {
            const wishlistData = snapshot.val();
            if (wishlistData) {
                const wishlistArray = Object.keys(wishlistData).map((key) => ({
                    id: key,
                    ...wishlistData[key],
                }));
                setWishlist(wishlistArray);
            } else {
                setWishlist([]);
            }
        });

        return () => unsubscribe();
    }, [data]);



    const show = (category) => {
        setActiveButton(category);
        setSideBarOpen(false);
    };

    const filterProduct = activeButton === 'wishlist' ? wishlist
        : activeButton === 'cart' ? cart
            : activeButton ? product.filter((item) => item.category === activeButton)
                : product;

    if (!data) return <h1>Loading...</h1>;

    return (
        <div className='flex mt-20 ml-5 '>
            <div className='flex-none w-1/5 font-poppins laptop:text-sm absolute laptop:relative'>
                <button className='laptop:hidden absolute left-0' onClick={() => setSideBarOpen(!sideBarOpen)}>
                    <i className='bi bi-list'></i>
                </button>

                <div className={`fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity laptop:hidden ${sideBarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setSideBarOpen(false)}></div>

                <div className={`fixed inset-y-0 left-0 transform ${sideBarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform laptop:relative laptop:translate-x-0 laptop:w-[100%] w-2/5 bg-white z-20`}>
                    <div className='flex flex-col' >
                        <button onClick={() => show('vitamin')} className={`bg-soft-grey h-[40px] rounded-lg font-semibold ${activeButton === 'vitamin' ? 'bg-soft-gray text-black' : 'bg-white text-[#ADADAD]'
                            }`}>Vitamin</button>
                        <button onClick={() => show('farmer-tools')} className={`bg-soft-grey h-[40px] rounded-lg font-semibold ${activeButton === 'farmer-tools' ? 'bg-soft-gray text-black' : 'bg-white text-[#ADADAD]'
                            }`}>Farmer Tools</button>
                        <button onClick={() => show('accessories')} className={`bg-soft-grey h-[40px] rounded-lg font-semibold ${activeButton === 'accessories' ? 'bg-soft-gray text-black' : 'bg-white text-[#ADADAD]'
                            }`}>Accessories</button>
                        <button onClick={() => show('cattles')} className={`bg-soft-grey h-[40px] rounded-lg font-semibold ${activeButton === 'cattles' ? 'bg-soft-gray text-black' : 'bg-white text-[#ADADAD]'
                            }`}>Cattles</button>
                    </div>
                    <div className='flex flex-col'>
                        <button onClick={() => show('wishlist')} className={`bg-soft-grey h-[40px] rounded-lg font-semibold ${activeButton === 'wishlist' ? 'bg-soft-gray text-black' : 'bg-white text-[#ADADAD]'
                            }`}>
                            Wishlist
                        </button>

                        <Link to={'/cart'} onClick={() => show('cart')} className={`bg-soft-grey h-[40px] rounded-lg font-semibold no-underline ${activeButton === 'cart' ? 'bg-soft-gray text-black' : 'bg-white text-[#ADADAD]'
                            }`}>
                            Cart
                        </Link>
                    </div>
                </div>
            </div>
            <div className='flex-grow w-3/4 px-5'>
                <div className='grid grid-cols-2 laptop:grid-cols-5 gap-3'>
                    {filterProduct.map((item) => (
                        <Link to={`/item/${item.id}`} key={item.id} className='cursor-pointer focus:bg-red px-2 shadow-card flex flex-col rounded-[21px] text-left font-poppins laptop:h-[270px] h-[190px] laptop:w-[190px] w-[140px] relative pt-1 text-black'>
                            <img src={item.image} alt={item.name} className='w-full laptop:h-[150px] h-[100px]' />
                            <p className='font-medium mt-3 float-left laptop:text-[13px] text-[10px]'>{item.name}</p>
                            <p className='font-semibold float-left absolute bottom-4 laptop:bottom-7 laptop:text-[14px] text-[11px]'>Rp {item.price},00</p>
                            <p className='laptop:text-[10px] text-[9px] absolute bottom-0'>{item.location}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;
