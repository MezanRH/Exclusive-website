import React from 'react'
import Title from './Title'
import PortionHadding from '../../components/PortionHadding'
import Flex from '../Flex'
import Product from '../product/Product'
import shirt from '../../assets/Shart.png'
import Bag from '../../assets/Bag.png'
import Box from '../../assets/Box.png'
import table from '../../assets/Table.png'
import Button from '../Button'

const ThisMonth = ({className}) => {
  return (
    <div className={className}>
    
    <Title text="This Month" className=" relative ml-8"/>
    <Flex className=' mt-8 mb-16'>
      <div className=' w-1/2'>
        <PortionHadding text="Best Selling Products" className=" mt-4 mr-16"/>
      </div>
      <div className='w-1/2 text-end'>
        <Button text="View All"/>
      </div>
    </Flex>
    <Flex className='justify-between'>
      <Product img={shirt} badgetext="-40%" alt="Game" text="HAVIT HV-G92 Gamepad" price="120" rating="88"/>
      <Product img={Bag} badgetext="-35%" alt="keybord" text="AK-900 Wired Keyboard" price="960" rating="75"/>
      <Product img={Box} badgetext="-30%" alt="monitor" text="IPS LCD Gaming Monitor" price="370" rating="99"/>
      <Product img={table} badgetext="-25%" alt="Chair" text="S-Series Comfort Chair " price="375" rating="99"/>
    </Flex>
    
    
    </div>
  )
}

export default ThisMonth