import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import logo from '../../assets/logo.png'
import ListItem from '../ListItem'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsCart3 } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'


const Navbar = () => {
  return (
    <>
      <Container>
      <Flex className="mt-10 mb-4">
        <div className='w-1/5'>
          <img src={logo} alt="logo" />
        </div>
        <div className='w-2/5'>
            <ul className=' justify-end'>
              <Flex>
                <ListItem text="Home" className=" mr-12 ml-14"/>
                <ListItem text="Contact" className=" mr-12"/>
                <ListItem text="About" className=" mr-12"/>
                <ListItem text="Sign Up" className=" mr-12"/>
              </Flex>
            </ul>
        </div>
        <div className='w-2/5 '>
          <Flex className="relative">
            <input type="text" placeholder='What are you loking for' className='border border-solid border-secound focus:outline-none ml-8' />
            <FiSearch className=' absolute top-1/2 right-[15rem] -translate-y-1/2'/>
            
              <AiOutlineHeart className=' ml-16 mt-1 cursor-pointer'/>
              <BsCart3 className=' ml-12 mt-1 cursor-pointer'/>
              <AiOutlineUser className=' ml-12 mt-1 cursor-pointer'/>
          </Flex>
        </div>
      </Flex>
      </Container>
      <div className=' border-[0.5px] border-four'></div>
    </>
    
  )
}

export default Navbar