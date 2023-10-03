import React from 'react'
import Title from './Title'
import PortionHadding from '../../components/PortionHadding'
import Flex from '../Flex'
import { BsArrowLeft } from 'react-icons/bs'
import { BsArrowRight } from 'react-icons/bs'
import CategoryIcon from './CategoryIcon'
import { GiSmartphone } from 'react-icons/gi'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { CgAppleWatch } from 'react-icons/cg'
import { AiOutlineCamera } from 'react-icons/ai'
import { CiHeadphones } from 'react-icons/ci'
import { LuGamepad } from 'react-icons/lu'

const Category = ({className}) => {
  return (
    <div className={className}>
    
    <Title text="Categories" className=" relative ml-8"/>
    <Flex className=' mt-8 mb-16'>
      <div className=' w-1/2'>
        <Flex>
          <PortionHadding text="Browse By Category" className=" mt-4 mr-16"/>
        </Flex>
      </div>
      <div className='w-1/2'>
        <Flex className="justify-end mt-8">
          <BsArrowRight className=' mr-5 text-2xl'/>
          <BsArrowLeft className='text-2xl'/>
        </Flex>
      </div>
    </Flex>
    <Flex className=' justify-between'>
      
        <CategoryIcon text="Phones">
          <GiSmartphone className=' hover:text-secound'/>
        </CategoryIcon>
        <CategoryIcon text="Computers">
          <HiOutlineDesktopComputer className=' hover:text-secound'/>
        </CategoryIcon>
        <CategoryIcon text="SmartWatch">
          <CgAppleWatch className=' hover:text-secound'/>
        </CategoryIcon>
        <CategoryIcon text="Camera">
          <AiOutlineCamera className=' hover:text-secound'/>
        </CategoryIcon>
        <CategoryIcon text="HeadPhones">
          <CiHeadphones className=' hover:text-secound'/>
        </CategoryIcon>
        <CategoryIcon text="Gaming">
          <LuGamepad className=' hover:text-secound'/>
        </CategoryIcon>
    </Flex>
    
    </div>
  )
}

export default Category