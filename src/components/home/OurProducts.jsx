import React from 'react'
import Title from './Title'
import PortionHadding from '../../components/PortionHadding'
import Flex from '../Flex'
import Button from '../Button'
import { BsArrowLeft } from 'react-icons/bs'
import { BsArrowRight } from 'react-icons/bs'
import ProductType2 from '../product/ProductType2'
import Cat from '../../assets/Cat.png'
import Camara from '../../assets/Camara.png'
import Laptop from '../../assets/Laptop.png'
import pacewash from '../../assets/pacewash.png'
import Car from '../../assets/Cair.png'
import Show from '../../assets/Show.png'
import Game from '../../assets/Game.png'
import Shart from '../../assets/Shart.png'

const OurProducts = ({className}) => {
  return (
    <div className={className}>
    
    <Title text="Our Products" className=" relative ml-8"/>
    <Flex className=' mt-8 mb-16'>
      <div className=' w-1/2'>
        <div>
          <PortionHadding text="Explore Our Products" className=" mt-4 mr-16"/>
        </div>
      </div>
      <div className='w-1/2'>
        <Flex className="justify-end mt-8">
          <BsArrowRight className=' mr-5 text-2xl'/>
          <BsArrowLeft className='text-2xl'/>
        </Flex>
      </div>
    </Flex>
    <Flex className='justify-between pb-16'>
      <ProductType2 img={Cat} alt="cat" text='Breed Dry Dog Food' price="100" rating="45"/>
      <ProductType2 img={Camara} alt="Camara" text='CANON EOS DSLR Camera' price="360" rating="95"/>
      <ProductType2 img={Laptop} alt="Laptop" text='ASUS FHD Gaming Laptop' price="700" rating="325"/>
      <ProductType2 img={pacewash} alt="pacewash" text='Curology Product Set ' price="500" rating="145"/>
    </Flex>
    <Flex className='justify-between'>
      <ProductType2 img={Car} alt="Car" text='Kids Electric Car' price="960" rating="85"/>
      <ProductType2 img={Show} alt="Show" text='Jr. Zoom Soccer Cleats' price="1160" rating="35"/>
      <ProductType2 img={Game} alt="Game" text='GP11 Shooter USB Gamepad' price="660" rating="55"/>
      <ProductType2 img={Shart} alt="Shart" text='Quilted Satin Jacket ' price="660" rating="55"/>
    </Flex>
    
    <div className=' text-center mt-16'>
      <Button text="View All Products"/>
    </div>
    
    </div>
  )
}

export default OurProducts