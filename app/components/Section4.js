import React from 'react'
import HeadBorderPara from './HeadBorderPara'

const Section4 = () => {
  return (
    <>
    <div className='bg-black'>
        <div style={{height:"25em", display:"grid", gridTemplate:"2fr 1fr / repeat(2, 1fr)"}}>
            <HeadBorderPara
                textColor = "#FFFFFF"
                beforeBold = 'Our'
                boldText = 'Services'
                afterBold = '& '
                orangeText = 'Expertise.'
                para = {`Office ipsum you must be muted. Conversation banner gave dive investigation chime usabiltiy whatever. Winning of crystallize another container reinvent stands. Left you viral relaxation unlock t-shaped. Ideal deck support attached waste highlights game synchronise.`}
            />
        </div>
    </div>
    </>
  )
}

export default Section4