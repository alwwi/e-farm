import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// import data from '../ConnectToDB/DBsementara.json'

const ItemDesc = () => {

    const [view, setView] = useState('description')
    const [data, setData] = useState(null)
    const { id } = useParams();

    useEffect(() => {
        fetch('/DB/DBsementara.json')
        .then((response)=>{
            if(!response.ok){
                throw new Error('Network response was not ok')
            }
            return response.json()
        })
        .then((data)=>setData(data))
        .catch((error)=>{
            console.error('Error fetching data:', error)
            throw Error
        })
    },[])

    
    if(!data){
        return <h1>Data not found</h1>
    }
    const product = data.product.find((item) => item.id === id);

    
    if(!product){
        return <h1>Item not found</h1>
    }
    

    const visible =(view) => {
        setView(view)
    }
  return (
    <div className='bg-[#E3E3E3] w-full py-12 px-40 grid grid-cols-2 mt-12 font-poppins'>
      <div className='image bg-white w-[500px] h-[570px]  rounded-2xl'>
        <img src={product.image} alt={product.name}  className='w-full object-cover place-self-center rounded-2xl'/>
      </div>


      <div className='relative'>
        <div className='name-product bg-white py-3 w-[95%] rounded-[50px] absolute top-0 right-0'>
            <h1>{product.name}</h1>
        </div>

        <div className='description w-[95%] h-[410px] bg-white rounded-2xl absolute bottom-0 right-0'>
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
    </div>
  )
}

export default ItemDesc
