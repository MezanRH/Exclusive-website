import React from 'react'
import Title from './Title'
import PortionHadding from '../../components/PortionHadding'
import Flex from '../Flex'
import TimeCondown from '../TimeCondown'
import Product from '../product/Product'
import Game3 from '../../assets/Game3.png'
import Keyboard from '../../assets/Keybord.png'
import Monitor from '../../assets/Tv.png'
import Chair from '../../assets/Cair.png'
import { BsArrowLeft } from 'react-icons/bs'
import { BsArrowRight } from 'react-icons/bs'

const Today = ({className}) => {
  return (
    <div className={className}>
    
    <Title text="Today’s" className=" relative ml-8"/>
    <Flex className=' mt-8 mb-16'>
      <div className=' w-1/2'>
        <Flex>
          <PortionHadding text="Flash Sales" className=" mt-4 mr-20"/>
          <TimeCondown className=" ml-2" duration={4 * 24* 60 * 60 * 1000}/>
        </Flex>
      </div>
      <div className='w-1/2'>
        <Flex className="justify-end">
          <BsArrowRight className=' mr-5 text-2xl'/>
          <BsArrowLeft className='text-2xl'/>
        </Flex>
      </div>
    </Flex>
    <Flex className='justify-between'>
      <Product img={Game3} badgetext="-40%" alt="Game" text="HAVIT HV-G92 Gamepad" price="120" rating="88"/>
      <Product img={Keyboard} badgetext="-35%" alt="keybord" text="AK-900 Wired Keyboard" price="960" rating="75"/>
      <Product img={Monitor} badgetext="-30%" alt="monitor" text="IPS LCD Gaming Monitor" price="370" rating="99"/>
      <Product img={Chair} badgetext="-25%" alt="Chair" text="S-Series Comfort Chair " price="375" rating="99"/>
    </Flex>
    </div>
  )
}

export default Today