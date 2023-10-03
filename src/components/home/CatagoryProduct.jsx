import React from 'react'
import bag2 from '../../assets/baner2.png'
import PortionTitle from '../PortionTitle'
import BanerTime from '../BanerTime'


const CatagoryProduct = () => {
  return (
    <div style={{backgroundImage: `url(${bag2})`}}>
      <PortionTitle text="Categories" className="text-[#00ff66] pt-[70px] pl-14"/>
      <h5 className=' font-inter text-5xl font-semibold text-secound w-[443px] mt-8 ml-14 '>Enhance Your Music Experience</h5>
      <BanerTime className=" text-four ml-14 mt-8" duration={3*24*60*60*1000}/>
      <button className=' mb-16 px-12 py-4 bg-[#00ff66] rounded ml-14 mt-10 text-secound'>Buy Now!</button>
    </div>
  )
}

export default CatagoryProduct
