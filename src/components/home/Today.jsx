import React from 'react'
import Title from './Title'
import PortionHadding from '../../components/PortionHadding'

const Today = ({className}) => {
  return (
    <div className={className}>
    
    <Title text="Today’s" className=" relative ml-8"/>
    <div className=' mt-8'>
      <PortionHadding text="Flash Sales"/>
    </div>
    </div>
  )
}

export default Today