import React from 'react';
import HeadBorderPara from './HeadBorderPara';

const Section2 = () => {
  return (
    <>
    <div className='bg-white w-full flex gap-7 pl-8 flex-col justify-center border-b-slate-500' style={{height:"25rem"}}>
        <HeadBorderPara
            textColor = "#001B2E"
            beforeBold = 'Our'
            boldText = 'Experience, Skills'
            afterBold = '& Expertise. Your'
            orangeText = 'Profit.'
            para = {`Office ipsum you must be muted. Conversation banner gave dive investigation chime usabiltiy whatever. Winning of crystallize another container reinvent stands. Left you viral relaxation unlock t-shaped. Ideal deck support attached waste highlights game synchronise.`}
        />
        {/* <div className='border-2 self-end' style={{borderColor: '#E5E5E5'}}></div> */}
    
    </div>
    
    </>
  )
}

export default Section2