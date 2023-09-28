import React from 'react'

const Badge = ({text,className}) => {
  return (
    <button className={`bg-primary rounded-sm py-1 px-3 text-secound font-pop text-xs font-normal ${className}`}>{text}</button>
  )
}

export default Badge