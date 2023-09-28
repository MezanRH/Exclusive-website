import React from 'react'

const Title = ({className,text}) => {
  return (
    <>
      <div className=' absolute before: border border-primary border-solid h-10 w-5 bg-primary rounded'></div>
      <h3 className={`font-pop font-semibold text-base text-primary ${className}`}>{text}</h3>
    </>
  )
}

export default Title