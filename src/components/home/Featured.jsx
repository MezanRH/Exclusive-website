import React from 'react'
import Title from './Title'
import PortionHadding from '../../components/PortionHadding'
import Flex from '../Flex'
import Images from '../Images'
import Arrival from '../../assets/Arrival1.png'
import Arriva2 from '../../assets/Arriva2.png'
import Arriva3 from '../../assets/Arrival3.png'
import Arriva4 from '../../assets/Arrival4.png'

const Featured = ({className}) => {
  return (
    <div className={className}>
    
    <Title text="Featured" className=" relative ml-8"/>
    <Flex className=' mt-8 mb-16'>
      <div className=' w-1/2'>
        <Flex>
          <PortionHadding text="New Arrival" className=" mt-4 mr-16"/>
        </Flex>
      </div>
      
    </Flex>
    <Flex>
      <div className='w-2/4'>
        <Images src={Arrival} className=" pr-7 min-h-full"/>
      </div>
      <div className='w-2/4'>
        <Images src={Arriva2} className=" pb-8"/>
        <Flex className="">
          <div className='w-2/4'>
            <Images src={Arriva3} className="pr-4"/>
          </div>
          <div className='w-2/4'>
            <Images src={Arriva4} className="pl-4"/>
          </div>
        </Flex>
      </div>
    </Flex>
    
    
    </div>
  )
}

export default Featured