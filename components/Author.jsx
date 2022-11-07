import React from 'react'
import Image from 'next/image'  

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg
     bg-black bg-opacity-20">
      <div className="absolute left-0 right-0 -top-14 ">
        <div className='relative h-[100px] w-[100px] m-auto'>
          <Image 
          src={author.photo.url}
          unoptimized
          alt={author.name}
          layout="fill"
          className='rounded-full '
            />
        </div>
      </div>
            <h3 className="text-white mt-4 mb-4 text-xl font-bold">
                {author.name}
            </h3>
            <p className='text-white text-lg'>{author.bio}</p> 
    </div>
  )
}

export default Author