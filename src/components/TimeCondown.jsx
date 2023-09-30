import React, { useEffect, useState } from 'react'
import Flex from './Flex'
import SmTitle from './home/SmTitle'
import PortionHadding from './PortionHadding'


const TimeCondown = ({className,duration}) => {
  const [time,setTime] = useState(duration)
  useEffect(()=>{
    setTimeout(()=>{
      setTime(time-1000)
    },1000)

    setSeconds(Math.floor(time /1000)%60)
    setMinuts(Math.floor(time / 1000 / 60)%60)
    setHours(Math.floor(time / 1000 / 60 / 60)%24)
    setDayes(Math.floor(time / 1000 / 60 / 60 / 24))

  },[time])
  
  let [days,setDayes] = useState(0);
  let [hours,setHours] = useState(0);
  let [minutes,setMinuts] = useState(0);
  let [seconds,setSeconds] = useState(0);
  

  return (
    <div className={className}>
      
      <Flex>
        <div>
          <SmTitle text="Days" className="ml-2"/>
          <PortionHadding text={days < 10 ? "0"+days : days}/>
        </div> <div className=' text-4xl mt-3 mx-3'> : </div>
        <div>
          <SmTitle text="Hours" className="ml-1"/>
          <PortionHadding text={hours < 10 ? "0"+hours : hours}/>
        </div> <div className=' text-4xl mt-3 mx-3'> : </div>
        <div>
          <SmTitle text="Minutes"/>
          <PortionHadding text={minutes < 10 ? "0"+minutes : minutes}/>
        </div> <div className=' text-4xl mt-3 mx-3'> : </div>
        <div>
          <SmTitle text="Seconds"/>
          <PortionHadding text={seconds < 10 ? "0"+seconds : seconds}/>
        </div> 
      </Flex>
    </div>
  )
}

export default TimeCondown