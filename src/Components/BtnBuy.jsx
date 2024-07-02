import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db, ref, set, update, get } from '../ConnectToDB/Firebase-config.mjs';

const BtnBuy = () => {
    const [product, setProduct] = useState([])
    const [isInWishlist, setIsInWishlist] = useState(false);
    const { id } = useParams()

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productRef = ref(db, `product/${id}`);
                const snapshot = await get(productRef);
                if (snapshot.exists()) {
                    setProduct(snapshot.val());
                } else {
                    console.error('Product not found');
                }
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();

        const wishlistRef = ref(db, `wishlist/${id}`);
        get(wishlistRef).then((snapshot) => {
            if (snapshot.exists()) {
                setIsInWishlist(true);
            }
        }).catch((error) => console.error('Error checking wishlist:', error));
    }, [id]);

    const addToWishlist = () => {
        if (!product) return;

        const wishlistRef = ref(db, `wishlist/${id}`);
        get(wishlistRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setIsInWishlist(true);
                    alert('Product already added to Wishlist');
                } else {
                    set(wishlistRef, product)
                    .then(() => {
                            setIsInWishlist(true);
                            alert('Product added to Wishlist');
                        })
                        .catch((error) => {
                            console.error('Error adding to Wishlist:', error);
                        });
                }
            })
            .catch((error) => {
                console.error('Error adding to Wishlist:', error);
            });
    };

    const addToCart = () => {
        if (!product) return;

        const cartRef = ref(db, `cart/${id}`);

        get(cartRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const currentQuantity = snapshot.val().quantity || 0;
                    update(cartRef, { quantity: currentQuantity + 1 })
                        .then(() => {
                            alert('Product quantity updated in Cart');
                        })
                        .catch((error) => {
                            console.error('Error updating product quantity in Cart:', error);
                        });
                } else {
                    set(cartRef, { ...product, quantity: 1 })
                        .then(() => {
                            alert('Product added to Cart');
                        })
                        .catch((error) => {
                            console.error('Error adding product to Cart:', error);
                        });
                }
            })
            .catch((error) => {
                console.error('Error fetching cart data:', error);
            });
    };


    if (!product) return null;

    return (
        <div className='flex bg-[#787878] rounded-[37px] font-poppins gap-3 laptop:w-[465px] w-full pl-2'>
            <button className='share' onClick={addToCart}>
                <img src={`${process.env.PUBLIC_URL}/Image-Assets/svg/btn-cart.svg`} alt="share" width={65} />
            </button>
            <button className='like' onClick={addToWishlist}>
                <svg className='like-icon-unliked w-[45px] h-[50px]'>
                    <use xlinkHref={`${process.env.PUBLIC_URL}/Image-Assets/svg/btn-like.svg#${isInWishlist ? 'like-icon-liked' : 'like-icon-unliked'}`} />
                </svg>
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
