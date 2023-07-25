import React from 'react'

const TimerContainer = ({timer}) => {
  
  const {ms, s , m, h } = timer;
  return (
    <div className='2xl:text-4xl font-bold text-center p-[3%] border-4 border-teal-400 mt-[7%] mx-[30%] xl:text-xl md:text-lg text-xs'>
        <span>{h>=10 ? h : "0" + h}:</span>
        <span>{m>=10 ? m : "0" + m}:</span>
        <span>{s>=10 ? s : "0" + s}:</span>
        <span>{ms>=10 ? ms : "0" + ms}</span>
    </div>
  )
}

export default TimerContainer