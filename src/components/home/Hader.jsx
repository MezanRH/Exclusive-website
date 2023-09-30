import React from 'react'
import Flex from '../Flex'
import ListItem from '../ListItem'
import { IoMdArrowDropright } from 'react-icons/io'
import Slide from './Slide'

const Hader = ({className}) => {
  return (
    <>
    <Flex className={className}>
      <div className='w-1/5'>
        <Flex className="justify-between">
          <ListItem text="Woman’s Fashion"/>
          <IoMdArrowDropright className='mt-1 text-xl'/>
        </Flex>
        <Flex className="justify-between mt-4">
          <ListItem text="Men’s Fashion"/>
          <IoMdArrowDropright className='mt-1 text-xl'/>
        </Flex>
        <ListItem text="Electronics" className="mt-4"/>
        <ListItem text="Home & Lifestyle" className="mt-4"/>
        <ListItem text="Medicine" className="mt-4"/>
        <ListItem text="Sports & Outdoor" className="mt-4"/>
        <ListItem text="Baby’s & Toys" className="mt-4"/>
        <ListItem text="Groceries & Pets" className="mt-4"/>
        <ListItem text="Health & Beauty" className="mt-4"/>
      </div>
      <div className='w-4/5'>
        <Slide className=" ml-7"/>
      </div>
    </Flex>
    </>
  )
}

export default Hader