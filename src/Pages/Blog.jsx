import React, { useEffect, useState } from 'react'

const Blog = () => {
  const [blog, setBlog] = useState([])

  useEffect(() => {
    fetch('/DB/DBblog.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then((data) => {
      setBlog(data.blog)
    })
    .catch((error) => console.error('Error fetching data:', error))
  }, [])


  return (
    <div className='font-poppins px-20'>
      <div className='tittle mt-28 text-left'>
        <h1>It's Our <span className='text-[#023E24]'>Blog</span></h1>
      </div>

      <div className='mt-14 flex'>
        {blog.map((post)=>(

          <div key={post.id} className='w-72 text-left'>
          <img src={post.Image} alt="" />
          <h3 className='mt-4'>{post.title}</h3>
          <p className='mt-2 text-[#A4A4A4]'>{post.date}</p>
        </div>
    ))}
      </div>
      </div>
  )
}

export default Blog
