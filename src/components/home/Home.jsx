import React from 'react'
import Container from '../Container'
import Hader from './Hader'
import Today from './Today'

const Home = () => {
  return (
    <>
    <Container>
      <Hader className="mt-10"/>
      <Today className="mt-36"/>
    </Container>
    </>
  )
}

export default Home