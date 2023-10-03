import { useEffect, useState } from 'react'
import Flex from './Flex'
import SmTitle from './home/SmTitle'
import PortionHadding from './PortionHadding'



const BanerTime = ({duration,className}) => {
  const [time,setTime] = useState(duration)
  useEffect(()=>{
    setTimeout(()=>{
      setTime(time-1000)
    },1000)
    setSeconds(Math.floor(time/1000)%60)
    setMinuts(Math.floor(time/1000/60)%60)
    setHours(Math.floor(time/1000/60/60)%24)
    setDayes(Math.floor(time/1000/60/60/24))

  },[time])

  let [days,setDayes] = useState(0)
  let [hours,setHours] = useState(0)
  let [minutes,setMinuts] = useState(0)
  let [seconds,setSeconds] = useState(0)
  return (
    <div className={className}>
      <Flex> 
        <div className='mx-3 bg-secound rounded-[50%] p-3'>
          <PortionHadding text={hours < 10 ? "0"+hours : hours} className=" text-four"/>
          <SmTitle text="Hours" className="ml-1"/>
        </div>
        <div className='mx-3 bg-secound rounded-[50%] p-3'>
          <PortionHadding text={days < 10 ? "0"+days : days} className=" text-four"/>
          <SmTitle text="Days" className="ml-2"/>
        </div>
        <div className='mx-3 bg-secound rounded-[50%] p-3'>
          <PortionHadding text={minutes < 10 ? "0"+minutes : minutes} className=" text-four"/>
          <SmTitle text="Minutes"/>
        </div>
        <div className='mx-3 bg-secound rounded-[50%] p-3'>
          <PortionHadding text={seconds < 10 ? "0"+seconds : seconds} className=" text-four"/>
          <SmTitle text="Seconds"/>
        </div> 
      </Flex>
    </div>
  )
}

export default BanerTime