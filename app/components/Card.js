import React from 'react'

const Card = (props) => {
    const title = props.title;
    const boldText = props.boldText;
    const text = props.text;
    const para = props.para;

  return (
    <>
    <div className='flex flex-col w-fit gap-5'>
        <div>
            <p className="text-sm" style={{color:"#E95A0C"}}>{title}</p>
        </div>
        <div>
            <p className='text-xl self-center' style={{color:"#001B2E"}}>
                <b>{boldText}</b><br />{text}
            </p>
        </div>
        <div className='text-sm'>
            <p style={{color:"#3D3D3D"}}>{para}</p>
        </div>
        <div>
            <p style={{color:"#E95A0C   "}}>
                Learn More ...
            </p>
        </div>
    </div>
    </>
  )
}

export default Card