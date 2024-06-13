'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './styles/navbar.module.css';


const Navbar = () => {

    const [isClick, setisClick] = useState(false);
    const toggleNavBar = () => {
        setisClick(!isClick);
    };
  return (
    <>
    <nav >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className='flex items-center justify-between' style={{height:"5rem"}}>
                <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                        <a href="/" className='text-white'>
                            <Image
                            src='/mefic.png'
                            alt='logo'
                            height={80}
                            width={80}/>
                        </a>
                    </div>
                </div>
                <div className='flex' style={{flexDirection:"column", gap:"0.5em", paddingTop:"7px"}}>
                    <div className='py-1 text-white text-xs flex justify-between' style={{height:"2em", width:"35em", zIndex:2,
                        alignSelf:"flex-end"
                    }}>
                        <div>
                            <Image
                            src="/Vector.png"
                            alt='phone'
                            width={15}
                            height={15}
                            style={{display:"inline"}}/>
                            <p style={{paddingLeft:"4px", display:"inline", color:'#C3C3C3'}}>
                                +1 (525) 456 7890
                            </p>
                        </div>
                        <div>
                        <Image
                        src="/sms.png"
                        alt='sms'
                        width={15}
                        height={15}
                        style={{display:"inline"}}/>
                        <p style={{paddingLeft:"4px", display:"inline", color:'#C3C3C3'}}>
                            info@domain.com
                        </p>
                        </div>
                        <div className='flex justify-between w-20' >
                        <div>
                        <Image 
                        src="/fb.png"
                        alt='facebook'
                        width={15}
                        height={15}/></div>
                        <div>
                        <Image 
                        src="/ln.png"
                        alt='linkedin'
                        width={15}
                        height={15}/></div>
                        <div>
                        <Image 
                        src="/x.png"
                        alt='X'
                        width={15}
                        height={15}/>
                        </div>
                        </div>
                        <div className='text-sm' style={{color:'#C3C3C3'}}>
                        العربية
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <div className='ml-4 flex items-center space-x-4 text-sm'>
                            <a 
                            href="/"
                            className='text-white hover:bg-white hover:text-black rounded-lg p-2'>
                                Our Services
                            </a>
                            <a 
                            href="/"
                            className='text-white hover:bg-white hover:text-black rounded-lg p-2'>
                                About MEFIC
                            </a>
                            <a 
                            href="/"
                            className='text-white hover:bg-white hover:text-black rounded-lg p-2'>
                                Media Center
                            </a>
                            <a 
                            href="/"
                            className='text-white hover:bg-white hover:text-black rounded-lg p-2'>
                                Careers
                            </a>
                            <button className='text-white hover:bg-white hover:text-black rounded-lg' style={{background: '#E95A0C'}}>
                                <p className='p-2'>Book a Consultant</p>
                            </button>
                        </div>
                    </div>
                    <div className='border-b-2' style={{borderBottomColor: '#353B4C'}}>

                    </div>
                </div>
                <div className='md:hidden flex items-center'>
                    <button
                    className='inline-flex items-center justify-senter p-2 rounded-md
                    hover: text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                    onClick={toggleNavBar}>
                        {isClick?(
                            <svg
                            className='h-6 w-6'
                            xmlns="https://www.w3.org/2000/svg"
                            fill="none"
                            viewBox='0 0 24 24'
                            stroke='currentColor'>
                                <path 
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M6 18L18 6M6 6l12 12'>
                                </path>
                            </svg>
                        ):(
                            <svg
                            className='h-6 w-6'
                            xmlns='https://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            >
                                <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"/>
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
        {isClick && (
            <div className='md:hidden'>
                <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                <a 
                href="/"
                className='text-white hover:bg-white hover:text-black rounded-lg p-2'>
                    Our Services
                </a>
                <a 
                href="/"
                className='text-white hover:bg-white hover:text-black rounded-lg p-2'>
                    About MEFIC
                </a>
                <a 
                href="/"
                className='text-white hover:bg-white hover:text-black rounded-lg p-2'>
                    Media Center
                </a>
                <a 
                href="/"
                className='text-white hover:bg-white hover:text-black rounded-lg p-2'>
                    Careers
                </a>
                <button className='text-white hover:bg-white hover:text-black rounded-lg' style={{background: '#E95A0C'}}>
                    <p className='p-2'>Book a Consultant</p>
                </button>
                </div>
            </div>
        )}
    
    </nav>
    </>
  )
}

export default Navbar