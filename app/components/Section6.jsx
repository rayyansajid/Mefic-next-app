import React from 'react'
import HeadBorderPara from './HeadBorderPara'
import Card from './Card'

const Section6 = () => {
  return (
    <>
        <div className='bg-white flex flex-col justify-center w-full items-center gap-5 p-4'>
            <HeadBorderPara
                beforeBold= "MEFIC"
                afterBold= "Capital"
                orangeText= "Portfolio"
                textColor= "#001B2E"
                para= "Office ipsum you must be muted. Conversation banner gave dive investigation chime usabiltiy whatever. Winning of crystallize another container reinvent stands."
                headingWidth="40%"
                paraWidth = "60%"
                borderWidth="20%"/>
            <div className='flex justify-between w-1/4 lg:w-1/4 pt-2 text-sm gap-7 md:gap-0 lg:gap-0'>
                <div className='hover:text-[#E95A0C] hover:border-b-2 hover:border-[#E95A0C] mb-2'>
                    <button>All</button>
                </div>
                <div className='hover:text-[#E95A0C] hover:border-b-2 hover:border-[#E95A0C] mb-2'>
                    <button>Real - Estate</button>
                </div>
                <div className='hover:text-[#E95A0C] hover:border-b-2 hover:border-[#E95A0C] mb-2'>
                    <button>Equity Funds</button>
                </div>
            </div>
            <div className='cards flex gap-2 justify-evenly w-full flex-wrap md:flex-nowrap lg:flex-nowrap'>
                <Card
                    imgSrc = '/meras.png'
                    imgAlt = 'meras'
                    imgHeight = '100'
                    imgWidth = '100'
                    imgClass="true"
                />
                <Card
                    imgSrc = '/mefic-logo.png'
                    imgAlt = 'mefic-logo'
                    imgHeight = '100'
                    imgWidth = '100'
                    imgClass="true"
                />
                <Card
                    imgSrc = '/fundaq.png'
                    imgAlt = 'fundaq'
                    imgHeight = '100'
                    imgWidth = '100'
                    imgClass="true"
                />
                <Card
                    imgSrc = '/karam.png'
                    imgAlt = 'karam'
                    imgHeight = '100'
                    imgWidth = '100'
                    imgClass="true"
                />
                <Card
                    imgSrc = '/sultan.png'
                    imgAlt = 'sultan'
                    imgHeight = '100'
                    imgWidth = '100'
                    imgClass="true"
                />
                <Card
                    imgSrc = '/body-masters.png'
                    imgAlt = 'body-masters'
                    imgHeight = '100'
                    imgWidth = '100'
                    imgClass="true"
                />
            </div>
        </div>
    </>
  )
}

export default Section6