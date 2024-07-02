import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer/Footer'
import { db, ref, get } from '../ConnectToDB/Firebase-config'

const Blog = () => {
  const [blog, setBlog] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productSnapshot = await get(ref(db, 'blog'));

        if (productSnapshot.exists()) {
          const productData = productSnapshot.val();
          setBlog(Object.values(productData));
        } else {
          console.error('No data available');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [blog])


  return (
    <>
      <div className='font-poppins px-20'>
        <div className='tittle mt-28 text-left'>
          <h1>It's Our <span className='text-[#023E24]'>Blog</span></h1>
        </div>

        <div className='mt-14 flex flex-col laptop:flex-row'>
          {blog.map((post) => (

            <div key={post.id} className='w-72 text-left'>
              <img src={post.Image} alt="" />
              <h3 className='mt-4'>{post.title}</h3>
              <p className='mt-2 text-[#A4A4A4]'>{post.date}</p>
            </div>
          ))}
        </div>

      </div>
        <div>
          <Footer />
        </div>
    </>
  )
}

export default Blog
