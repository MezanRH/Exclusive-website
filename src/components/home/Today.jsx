import React from 'react'
import Title from './Title'
import PortionHadding from '../../components/PortionHadding'
import Flex from '../Flex'
import TimeCondown from '../TimeCondown'

const Today = ({className}) => {
  return (
    <div className={className}>
    
    <Title text="Today’s" className=" relative ml-8"/>
    <Flex className=' mt-8'>
      <PortionHadding text="Flash Sales" className=" mt-4 mr-20"/>
      <TimeCondown className=" ml-6" duration={4 * 24* 60 * 60 * 1000}/>
    </Flex>
    </div>
  )
}

export default Today