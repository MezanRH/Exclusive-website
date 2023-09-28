import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { RiArrowDropDownLine } from 'react-icons/ri'

const TopHader = () => {
  return (
    <div className=' bg-four'>
      <Container>
        <Flex>
          <div className=' w-70 text-white text-end'>
            <p className='font-pop text-sm font-normal text-secound py-3'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className=' font-semibold'>ShopNow</span></p>
          </div>
          <div className=' w-1/4 text-end'>
            <button className='font-pop text-sm font-normal text-secound py-3 '>English</button>
          </div>
        </Flex>
      </Container>
    </div>
  )
}

export default TopHader