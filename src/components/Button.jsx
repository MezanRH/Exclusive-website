import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`bg-primary py-4 px-12 rounded-md font-pop text-base font-medium text-secound`}>{text}</button>
  )
}

export default Button