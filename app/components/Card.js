import React from 'react'
import Image from 'next/image';

const Card = (props) => {
    const boldText = props.boldText;
    const text = props.text;
    const para = props.para;
    if(props.imgSrc !== undefined){
        return (
            <>
            {/* Implement the hover color transformation */}
            {/* <div className={props.hover ? 'p-4 m-4 bg-white hover:bg-' : 'p-4 m-4 bg-white'}> */}
            <div className='p-4 m-4 bg-white border-2 border-r-4 border-b-4 border-slate-100'>
            <div className='flex flex-col w-fit gap-4 bg-white'>
                <div className={`${props.imgClass ? 'flex justify-center' : null}`}>
                    <Image
                        src={props.imgSrc}
                        alt={props.imgAlt}
                        height={props.imgHeight}
                        width={props.imgWidth}
                    />
                </div>
                <div>
                    <p className='text-xl self-center' style={{color:"#001B2E"}}>
                        {typeof(boldText) === typeof("") ? (<><b>{boldText}</b><br />{text}</>) : (<>{text}</>)}
                    </p>
                </div>
                <div className='text-sm' style={{width:props.paraWidth || "75%"}}>
                    <p style={{color:"#3D3D3D"}}>{para}</p>
                </div>
                <div>
                    <p style={{color:"#E95A0C"}}>
                        Learn More ...
                    </p>
                </div>
            </div>
            </div>
            </>
        )
    }else{
        const title = props.title;
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
}

export default Card