import React from 'react'

const SmTitle = ({text,className}) => {
  return (
    <h3 className={` text-xs font-pop font-medium ${className}`}>{text}</h3>
  )
}

export default SmTitle