import React from 'react'
import Images from '../Images'
import Flex from '../Flex'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsEye } from 'react-icons/bs'
import Rating from './Rating'
import Star from './Star'
import ProductName from './ProductName'
import Price from './Price'

const ProductType2 = ({className,img,alt,text,price,rating}) => {
  return (
    <div className={`w-19 ${className}`}>
      <div className=' relative group'>
        <Images src={img} alt={alt} className=" pt-7 pb-20 group-hover:py-7 px-2"/>
        <button className='bg-four w-full font-pop text-base py-2 mb-3 hidden text-white font-medium rounded group-hover:block'>Add To Cart</button>
        
        <ProductName text={text}/>
        <Price text={price}/>
        <Flex>
          <Star/><Star/><Star/><Star/><Star/>
          <Rating text={rating}/>
        </Flex>
        <div className=' absolute right-0 top-0 text-2xl'>
          <AiOutlineHeart className='cursor-pointer'/>
          <BsEye className='mt-4 cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}

export default ProductType2