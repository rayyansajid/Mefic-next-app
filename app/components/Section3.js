import React from 'react'
import Card from "./Card"
const Section3 = () => {
  return (
    <>
    <div className='bg-white w-full flex gap-7 pl-8 justify-around items-center' style={{height:"25rem"}}>
        
        <Card 
        title = 'FIRST'
        boldText = 'Dramatically'
        text = 'maintain solutions'
        para = 'Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.' />

        <div className='border-2 rounded h-4/5' style={{borderColor: '#E5E5E5'}}></div>
        
        <Card 
        title = 'SECOND'
        boldText = 'Efficiently unleash'
        text = 'media information'
        para = 'Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.' />
        
        <div className='border-2 rounded h-4/5' style={{borderColor: '#E5E5E5'}}></div>
        
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