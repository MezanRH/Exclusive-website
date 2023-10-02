import React from 'react'
import PortionTitle from '../PortionTitle'


const CategoryIcon = ({children,text}) => {
  return (
    <div className=' border border-four px-9 py-6 text-5xl hover:border-primary hover:bg-primary hover:text-secound group cursor-pointer items-center flex flex-col items-center group'>
        {children}
        <PortionTitle text={text} className="mt-4 group-hover:text-secound"/>
    </div>
  )
}

export default CategoryIcon