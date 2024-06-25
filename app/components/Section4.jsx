import React from 'react'
import HeadBorderPara from './HeadBorderPara'
import Card from './Card'

const Section4 = () => {
  return (
    <>    
    <div className='flex flex-col gap-7 pt-5'>
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
        {/* Create Animations Here */}
        <div className='relative h-[10em]'>
            <div className='absolute w-full h-full z-0 animate-slideInFromRight'
            style={{display:"grid",
                gridTemplateColumns:"7fr 4fr 4fr 1fr",
                gridTemplateRows:"1.5fr 0.5fr 3fr",
            }}>
                <div className='bg-slate-500'
                style={{
                    gridColumnStart:"1",
                    gridColumnEnd:"2",
                    gridRowStart:"3",
                    gridRowEnd:"4"
                }}>

                </div>
                <div className='bg-slate-500'
                style={{
                    gridColumnStart:"3",
                    gridColumnEnd:"4",
                    gridRowStart:"2",
                    gridRowEnd:"4"
                }}>

                </div>
                <div className='bg-slate-500'
                style={{
                    gridColumnStart:"4",
                    gridColumnEnd:"5",
                    gridRowStart:"1",
                    gridRowEnd:"4"
                }}>

                </div>

            </div>
            <div className='absolute w-[80%] h-full z-10 animate-slideInFromLeft' 
                style={{display:'grid',
                    gridTemplateColumns: '0.5fr 4fr 3fr 3fr',
                    gridTemplateRows: '1fr 1fr 2fr 1fr'}}>
                <div className='bg-white'
                style={{gridColumnStart:"1",
                    gridColumnEnd:"2",
                    gridRowStart:"1",
                    gridRowEnd:"2"}}>

                </div>
                <div className='bg-white'
                style={{gridColumnStart:"1",
                    gridColumnEnd:"3",
                    gridRowStart:"2",
                    gridRowEnd:"5"}}>

                </div>
                <div className='bg-white'
                style={{gridColumnStart:"3",
                    gridColumnEnd:"4",
                    gridRowStart:"4",
                    gridRowEnd:"5"}}>

                </div>
                <div className='bg-white'
                style={{gridColumnStart:"4",
                    gridColumnEnd:"5",
                    gridRowStart:"3",
                    gridRowEnd:"5"}}>

                </div>
            </div>
            <div className='absolute w-full h-full z-20 animate-slidetoRop'
            style={{display:"grid",
                gridTemplateColumns:"2fr 3fr 2fr 2fr 2fr",
                gridTemplateRows:"2fr 0.5fr 2fr 1.5fr"
            }}>
                <div className='bg-[#2D3C65] animate-slideInFromRight' style={{
                    gridColumnStart:"1",
                    gridColumnEnd:"2",
                    gridRowStart:"2",
                    gridRowEnd:"5"
                }}>

                </div>
                <div className='bg-[#2D3C65] animate-slideInFromLeft' style={{
                    gridColumnStart:"2",
                    gridColumnEnd:"3",
                    gridRowStart:"4",
                    gridRowEnd:"5"
                }}>

                </div>
                <div className='bg-[#2D3C65]' style={{
                    gridColumnStart:"3",
                    gridColumnEnd:"4",
                    gridRowStart:"1",
                    gridRowEnd:"5"
                }}>

                </div>
                <div className='bg-[#2D3C65] animate-slideInFromRight' style={{
                    gridColumnStart:"4",
                    gridColumnEnd:"5",
                    gridRowStart:"2",
                    gridRowEnd:"5"
                }}>

                </div>
                <div className='bg-[#2D3C65] animate-slideInFromLeft' style={{
                    gridColumnStart:"5",
                    gridColumnEnd:"6",
                    gridRowStart:"3",
                    gridRowEnd:"5"
                }}>

                </div>
                
            </div>

        </div>
    </div>
    </>
  )
}

export default Section4