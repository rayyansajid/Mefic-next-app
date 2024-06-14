import React from 'react'
import HeadBorderPara from './HeadBorderPara'
import Card from './Card'

const Section4 = () => {
  return (
    <>
    {/* <div className='bg-black'>
        <div className='m-2' style={{height:"25em", display:"grid", gridTemplate:"1fr / repeat(2, 1fr)"}}>
            {/* <div className='flex items-center justify-center w-full'> */}
            {/*<div className=''>
            <p className="text-3xl" style={{color:`#FFFFFF`}}>
            Our <b>Services</b> & <span className="font-weight-extrabold" style={{color:'#E95A0C'}}><b>Expertise.</b></span>
            </p>
            </div>
            <div className='border-2 w-1/2 order-2 rounded ml-14' style={{borderColor: '#2D3C65', height:"1px"}}></div>
            <div className='flex items-center justify-center w-full row-end-3 row-start-1 col-start-2'>
                <p style={{color:'#C3C3C3'}}>
                    Office ipsum you must be muted. Conversation banner gave dive investigation chime usabiltiy whatever. Winning of crystallize another container reinvent stands. Left you viral relaxation unlock t-shaped. Ideal deck support attached waste highlights game synchronise.
                </p>
            </div>
        </div>
    </div> */}
    
    <div className='flex flex-col gap-7'>
        <div className='flex gap-3 h-fit' style={{display:"flex", }}>
            {/* <div className='flex items-center justify-center w-full'> */}
            <div className='flex flex-col gap-4 m-7 h-fit'>
                <div className=''>
                <p className="text-3xl" style={{color:`#FFFFFF`}}>
                Our <b>Services</b> & <span className="font-weight-extrabold" style={{color:'#E95A0C'}}><b>Expertise.</b></span>
                </p>
                </div>
                <div className='border-2 w-1/2 order-2 rounded' style={{borderColor: '#2D3C65', height:"1px"}}></div>
            </div>
            <div className='w-3/4 h-fit mt-7 text-sm'>
                <p style={{color:'#C3C3C3'}}>
                    Office ipsum you must be muted. Conversation banner gave dive investigation chime usabiltiy whatever. Winning of crystallize another container reinvent stands. Left you viral relaxation unlock t-shaped. Ideal deck support attached waste highlights game synchronise.
                </p>
            </div>
        </div>
        <div className='flex gap-2 justify-around mx-7'>
            <div className='flex flex-col justify-center'>
                <p className="text-3xl" style={{color:`#FFFFFF`}}>
                    What <b>Problems</b> can we <span className="font-weight-extrabold" style={{color:'#E95A0C'}}><b>solve together</b></span>?
                </p>
            </div>
            <Card
                boldtext = 'Assets'
                text = 'Management'
                para ='Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.'
                imgSrc = '/dollar.png'
                imgAlt = 'dollar'
                imgHeight = '70'
                imgWidth = '70'
            />
            <Card
                boldtext = 'Private'
                text = 'Equity & IB'
                para ='Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.'
                imgSrc = '/stock.png'
                imgAlt = 'stock'
                imgHeight = '70'
                imgWidth = '70'
            />
            <Card
                boldtext = 'Real Estate '
                text = 'Investments'
                para ='Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.'
                imgSrc = '/estate.png'
                imgAlt = 'estate'
                imgHeight = '70'
                imgWidth = '70'
            />
        </div>
    </div>
    </>
  )
}

export default Section4