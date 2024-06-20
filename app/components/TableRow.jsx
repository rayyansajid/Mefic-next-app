import React from 'react'

const TableRow = (props) => {
    const hoverProps = "hover:text-white hover:bg-[#001B2E]"
  return (
    <>
    {/* <div className='flex justify-around w-full h-10' style={{background: props.bgColor || "#FFFFFF"}}> */}
        <div className='col-span-2 flex justify-center items-center' style={{color:props.TextColor || "#001B2E", background: props.bgColor || "#FFFFFF"}}>
            {props.c1}
        </div>
        <div className='flex justify-center items-center' style={{color:props.TextColor || "#001B2E", background: props.bgColor || "#FFFFFF"}}>
            {props.c2}
        </div>
        <div className='flex justify-center items-center hover:bg-[#001B2E]' style={{color:props.c3TextColor || "#E95A0C", background: props.bgColor || "#FFFFFF"}}>
            {props.c3}
        </div>
    {/* </div> */}
    </>
  )
}

export default TableRow