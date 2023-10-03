
import Container from '../Container'
import Hader from './Hader'
import Today from './Today'
import Category from './Category'
import ThisMonth from './ThisMonth'
import CatagoryProduct from './CatagoryProduct'
import OurProducts from './OurProducts'
import Featured from './Featured'

const Home = () => {
  return (
    <>
    <Container>
      <Hader className="mt-10"/>
      <Today className="mt-36"/>
      <Category className=" my-36"/>
      <ThisMonth className="mb-36"/>
      <CatagoryProduct/>
      <OurProducts className="pt-36"/>
      <Featured className=" my-32"/>
    </Container>
    </>
  )
}

export default Home