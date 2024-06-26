import React from 'react'
import Card from "./Card"
const Section3 = () => {
  return (
    <>
    <div className='bg-white w-full flex gap-7 pl-8 pb-6 justify-around items-center flex-wrap md:flex-nowrap lg:flex-nowrap md:h-[25rem] lg:h-[25rem] h-fit'>
        
        <Card 
        title = 'FIRST'
        boldText = 'Dramatically'
        text = 'maintain solutions'
        para = 'Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.' />

        <div className='border-2 rounded h-4/5 hidden md:inline' style={{borderColor: '#E5E5E5'}}></div>
        
        <Card 
        title = 'SECOND'
        boldText = 'Efficiently unleash'
        text = 'media information'
        para = 'Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.' />
        
        <div className='border-2 rounded h-4/5 hidden md:inline' style={{borderColor: '#E5E5E5'}}></div>
        
        <Card
        title = 'THIRD'
        boldText = 'Quickly maximize'
        text = 'timely deliverables'
        para = 'Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.' />

    </div>
    </>
  )
}

export default Section3