import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Buy from '../Components/BtnBuy'
import { db, ref, get } from '../ConnectToDB/Firebase-config'

const ItemDesc = () => {

    const [view, setView] = useState('description')
    const [product, setProduct] = useState(null)
    const { id } = useParams();

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
    }, [id]);

    
    if(!product){
        return <h1>Item not found</h1>
    }
    

    const visible =(view) => {
        setView(view)
    }

  return (
    <div className='bg-[#E3E3E3] w-full py-12 laptop:px-40 flex flex-col laptop:grid laptop:grid-cols-2 mt-12 font-poppins relative'>
      <div className='image bg-white w-full  laptop:w-[500px] laptop:h-[570px] rounded-2xl'>
        <img src={product.image} alt={product.name}  className='laptop:w-full w-[380px] object-cover place-self-center rounded-2xl'/>
      </div>


      <div className='relative'>
        <div className='name-product bg-white py-3 w-[95%] laptop:rounded-[50px] rounded-[20px] laptop:absolute top-0 right-0 mx-2 my-2 laptop:m-0'>
            <h1>{product.name}</h1>
        </div>

        <div className='description laptop:w-[95%] h-[410px] bg-white rounded-2xl laptop:absolute relative bottom-0 right-0'>
            <div className='button bg-[#ADADAD] mx-2 mt-2 p-1 h-[40px] rounded-[15px]'>
                <button onClick={()=>visible('description')} className={`bg-${view === 'description' ? 'white' : 'transparent'} w-1/2 rounded-[10px] h-full`}>
                    Description
                </button>
                <button onClick={()=>visible('specification')} className={`bg-${view === 'specification' ? 'white' : 'transparent'} w-1/2 rounded-[10px] h-full`}>
                    Specification
                </button>
            </div>
            {view === 'description' && (

                
                <p className='px-4 text-justify mt-16 h-64'>
                {product.description} 
            </p>
                )}
            {view === 'specification' && (
                <p className='px-4 text-justify mt-16 h-64'>
                {product.specification}
                </p>
            )}
        </div>
      </div>
      <div className='button-buy mt-3 laptop:m-0 laptop:absolute bottom-5 right-[35%]'>
        <Buy />
      </div>
    </div>
  )
}

export default ItemDesc
