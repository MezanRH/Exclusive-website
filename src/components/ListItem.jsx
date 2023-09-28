import React from 'react'

const ListItem = ({text,className}) => {
  return (
    <li className={`font-pop text-base font-normal text-black cursor-pointer list-none ${className}`}>{text}</li>
  )
}

export default ListItem