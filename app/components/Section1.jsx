import React from 'react'
import HeadBorderPara from './HeadBorderPara';
import MovingImage from './MovingImage';
import styles from "./styles/sec1.module.css"

const Section1 = () => {
  return (
    <div className='w-full relative overflow-hidden' style={{height:'32rem'}}>
      <div className={`${styles.Main} flex flex-col w-fit ml-8 gap-3`} style={{height:'25rem', justifyContent:'center'}}>
        <div>
          <button className='text-white hover:bg-white hover:text-black rounded-lg' style={{background: '#2D3C65'}}>
            <p className='p-2'>Book a Consultant</p>
          </button>
        </div>
        <HeadBorderPara 
        //   arguments here
        textColor = "#FFFFFF"
        beforeBold = 'Your future financial'
        boldText = 'Investment made'
        afterBold = 'easier with'
        orangeText ='MEFIC'
        para = {`Office ipsum you must be muted. Conversation banner gave dive investigation chime usabiltiy whatever.
          Winning of crystallize another container reinvent stands. Left you viral relaxation unlock t-shaped. Ideal deck
          support attached waste highlights game synchronise.`}
        paraWidth="50%"/>
        <div>
        <button className='text-white hover:bg-white hover:text-black rounded-lg' style={{background: '#E95A0C'}}>
          <p className='p-2'>Book a Consultant</p>
        </button>
        <button className='text-white border-red-500 rounded-md ml-8' style={{borderWidth:"3px"}}>
          <p className="px-3 py-1">Login</p>
        </button>
        </div>
      </div>
    {/* // <div></div> Animation Wala Kaam yahan kro */}
    {/* hover:animate-slideInFromLeft */}
      <div className='Pic absolute w-[110%] h-[75%] top-[9rem] overflow-hidden z-10 hover:animate-slideInFromLeft'>
          <MovingImage/>
      </div>
    </div>
  )
}

export default Section1