import React from 'react'
import HeadBorderPara from './HeadBorderPara';

const Section1 = () => {
  return (
    <div className="flex flex-col w-fit ml-8 gap-5" style={{height:'25rem', justifyContent:'center'}}>
      <div>
        <button className='text-white hover:bg-white hover:text-black rounded-lg' style={{background: '#2D3C65'}}>
          <p className='p-2'>Book a Consultant</p>
        </button>
      </div>
      {/* <div>
        <p className="text-white text-xl">
        Your future financial <br/> <b>Investment made</b> easier <br/> with <span className="font-weight-extrabold" style={{color:'#E95A0C'}}>MEFIC</span>
        </p>
      </div>
      <div className='border-2 w-1/2' style={{borderColor: '#2D3C65'}}></div>
      <div>
      <p style={{color:'#C3C3C3'}}>
        Office ipsum you must be muted. Conversation banner gave dive investigation chime usabiltiy whatever.<br/>
        Winning of crystallize another container reinvent stands. Left you viral relaxation unlock t-shaped. Ideal deck<br/>
        support attached waste highlights game synchronise.
      </p>
      </div>*/}
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
      />
      <div>
      <button className='text-white hover:bg-white hover:text-black rounded-lg' style={{background: '#E95A0C'}}>
        <p className='p-2'>Book a Consultant</p>
      </button>
      <button className='text-white border-red-500 rounded-md ml-8' style={{borderWidth:"3px"}}>
        <p className="px-3 py-1">Login</p>
      </button>
      </div>
    </div>
    // <div></div> Animation Wala Kaam yahan kro
  )
}

export default Section1