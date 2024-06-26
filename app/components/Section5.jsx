import React from 'react'
import HeadBorderPara from './HeadBorderPara';
import Table from './Table';
import Card from './Card';
const Section5 = () => {
  return (
    <>
    <div className='bg-white p-10'>
        <div className='flex justify-around gap-4 pb-4 flex-wrap md:flex-nowrap'>
            <div className='w-full md:w-3/6'>
                <Table />
            </div>
            <div className='flex flex-col gap-4 w-full md:w-1/3'>
                <div className='w-fit'>
                    <button className='text-sm text-[#001B2E] bg-[#E7E7E7] hover:bg-white hover:text-black rounded-lg'>
                        <p className='p-2'>MEFIC FUNDS</p>
                    </button>
                </div>
                <div className='flex flex-col gap-4 w-full'>
                <HeadBorderPara
                    beforeBold= "To"
                    boldText= "Find"
                    afterBold= "The Best"
                    orangeText= "MEFIC Funds?"
                    textColor= "#001B2E"
                    para= "Collaboratively administrate empowered markets via plug-and-play maintain networks. Dynamically usable procrastinate B2B users after installed base benefits. Dramatically maintain visualize customer directed convergence without revolutionary ROI."
                    headingWidth = "100%"
                    paraWidth = "100%"/>
                </div>
                <div className='pt-6 w-fit'>
                    <button className='text-sm text-[#001B2E] border border-[#E95A0C] hover:bg-white hover:text-black rounded-md'>
                        <p className='p-2'>Book a Consultant</p>
                    </button>
                </div>
            </div>
        </div>
        <div className='py-12 w-full md:w-3/4 lg:w-3/4 flex flex-col gap-5'>
            <HeadBorderPara
                beforeBold= "The"
                boldText= "latest news"
                afterBold= "and our"
                orangeText= "portfolio companies"
                textColor= "#001B2E"
                para= "Office ipsum you must be muted. Conversation banner gave dive investigation chime usabiltiy whatever. Winning of crystallize another container reinvent stands. Left you viral relaxation unlock t-shaped. Ideal deck support attached waste highlights game synchronise."
                headingWidth="40%"
                paraWidth = "60%"
                borderWidth="20%"/>
        </div>
        <div className='flex gap-2 flex-wrap md:flex-nowrap lg:flex-nowrap'>
            <Card
                text = 'MEFIC Saudi Riyal Murabaha Fund for the period ending on 2023-12-31'
                para ='Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.'
                imgSrc = '/mefic-card.png'
                imgAlt = 'mefic-logo'
                imgHeight = '250'
                imgWidth = '250'
                imgClass="true"
                paraWidth="100%"
            />
            <Card
                text = 'MEFIC Saudi Riyal Murabaha Fund for the period ending on 2023-12-31'
                para ='Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.'
                imgSrc = '/mefic-card2.png'
                imgAlt = 'mefic-logo'
                imgHeight = '250'
                imgWidth = '250'
                imgClass="true"
                paraWidth="100%"
            />
            <Card
                text = 'MEFIC Saudi Riyal Murabaha Fund for the period ending on 2023-12-31'
                para ='Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.'
                imgSrc = '/mefic-card3.png'
                imgAlt = 'mefic-logo'
                imgHeight = '250'
                imgWidth = '250'
                imgClass="true"
                paraWidth="100%"
            />
        </div>
    </div>
    </>
  )
}

export default Section5;