import React from 'react'

const Images = ({src,alt,className}) => {
  return (
    <img className={`bg-auto bg-cover min-h-250 w-full ${className}`} src={src} alt={alt} />
  )
}

export default Images