import React from 'react';
import styles from './styles/footer.module.css';
import Image from 'next/image';
// import '@./public/Tree.png';

const Footer = () => {
  return (
    // <div className={`${styles['footer-main-container']} bg-slate-500`}>
    //     <div className={`bg-black ${styles['footer-inner-container']}`}>
    //         <div className={`${styles.div1} bg-green-400`}>
    //             <div className='px-5 py-4' style={{height:"fit-content"}}>
    //                 <Image src='/Tree.png'
    //                 alt="Pic of Tree"
    //                 width='50'
    //                 height='50'
    //                 className='image' 
    //                 style={{display:"inline"}}/>
    //                 <Image src='/Healthx.png'
    //                 alt="Pic of Tree"
    //                 width={50}
    //                 height={50}
    //                 className='image'
    //                 style={{display:"inline", paddingLeft:"1px"}} />
    //             </div>
    //             <div className='px-5 text-xl' style={{display:"block"}}>
    //             Healthcare Solutions <br/> For All
    //             </div>
    //             <div className='p-5'>
    //                 AUSTIN, Texas, Jan.11, 2024 -- Ambiq@
    //             </div>
    //             <div >
    //                 <div className='p-5'style={{display:"flex",gap:"10px"}}>
    //                 <Image 
    //                 src="/fb.png"
    //                 alt='facebook'
    //                 width={10}
    //                 height={10}/>
                    
    //                 <Image 
    //                 src="/ln.png"
    //                 alt='linkedin'
    //                 width={10}
    //                 height={10}/>
                    
    //                 <Image 
    //                 src="/x.png"
    //                 alt='X'
    //                 width={10}
    //                 height={10}/>
                    
    //                 <Image 
    //                 src="/insta.png"
    //                 alt='Instagram'
    //                 width={10}
    //                 height={10}/></div>
    //             </div>

    //         </div>
    //         <div className={`${styles.div2} bg-blue-100`}>
    //             <div className={`${styles['div2-1']}`}>
    //                 <div className='py-5' style={{display:"flex",alignItems:"center",justifyContent:"center",}}>
    //                     Quick Links
    //                 </div>
    //             </div>
    //             <div className={`${styles['div2-2']}`}>
    //             <div className='py-5' style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
    //             Resources</div>
    //             </div>
    //             <div className={`${styles['div2-3']}`}>
    //             <div className='py-5' style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
    //             Our Information</div>
    //             </div>
    //             <div className={`${styles['div2-4']} px-3 text-sm`}>
    //             About us <br/>
    //             FAQs    <br/>
    //             New's and Media <br/>
    //             Contact us <br/>
    //             Digital Videos <br/>
    //             </div>
    //             <div className={`${styles['div2-5']} text-sm`}>
    //             Individuals & Families <br/>
    //             Corporate Health Solutions<br/>
    //             Health Incurrence<br/>
    //             Government Health Initiate
    //             </div>
    //             <div className={`${styles['div2-6']} text-sm`}>
    //                 <Image
    //                 src="/sms.png"
    //                 alt='sms'
    //                 width={15}
    //                 height={15}
    //                 style={{display:"inline",paddingRight:"3px"}}/>                
    //             info@healthxpakistan.com <br/><br/>
    //             <Image
    //                 src="/Vector.png"
    //                 alt='phone'
    //                 width={15}
    //                 height={15}
    //                 style={{display:"inline",paddingRight:"3px"}}/>
    //             021 382 824 33<br/><br/>
    //             <Image
    //                 src="/location.png"
    //                 alt='location'
    //                 width={15}
    //                 height={15}
    //                 style={{display:"inline",paddingRight:"3px"}}/>
    //             Address: 4th floor, Elegant tower,<br/> plot no
    //             BC-2, Khayaban-e- Iqbal,<br/> Block no 5, KDA
    //             Scheme No 5, <br/> Clifton, Karachi, Pakistan
    //             </div>
    //         </div>
    //         {/* <br /> */}
    //         {/* <span></span> */}
    //         <div className={`${styles.div3} bg-red-400`}>
    //             I am in Div-3
    //         </div>
    //         {/* <span ></span> */}
    //         {/* <br /> */}
    //         <div className={`${styles.div4} bg-orange-400`}>
    //             I am in Div-4
    //         </div>
    //     </div>
    // </div>
    <>
        <div className='Footer flex flex-col justify-center items-center gap-4 p-8 pb-4'>
            <div className='flex justify-between gap-4 w-full h-80'>
                <div className='flex gap-6 flex-col pt-10 w-full bg-[#181E2D]'>
                    <div className='pl-3'>
                        <Image
                            src="/mefic.png"
                            alt="mefic-logo"
                            height={140}
                            width={140}
                        />
                    </div>
                    <div className='flex gap-7 w-full text-sm px-3'>
                        <div className='flex gap-2'>
                            <div className='pt-0.5'>
                            <Image
                                src="/phone.png"
                                alt="mefic-logo"
                                height={15}
                                width={15}/>
                            </div>
                            <div>
                                <p className='text-white'>
                                    +1 (525) 456 7890
                                </p>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='pt-0.5'>
                            <Image
                                src="/sms.png"
                                alt="mefic-logo"
                                height={15}
                                width={15}/>
                            </div>
                            <div>
                                <p className='text-white'>
                                    info@domain.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='w-full flex justify-end items-center'> */}
                <div className='w-full h-[80%] grid grid-cols-3 gap-1 self-end'>
                    {/* <div className='bg-[#2D3C65] w-[80%] h-[80%] grid grid-cols-3 gap-1 self-end'> */}
                        <div className='bg-[#181E2D] grid grid-rows-5 text-sm text-white'>
                            <div className='row-span-2 flex justify-center items-center text-lg'><b>Solutions</b></div>
                            <div className='flex justify-center items-center'>Assets Management</div>
                            <div className='flex justify-center items-center'>Private Equity & IB</div>
                            <div className='flex justify-center items-center'>Real Estate Investments</div>
                        </div>
                        <div className='bg-[#181E2D] grid grid-rows-5 text-sm text-white'>
                            <div className='row-span-2 flex justify-center text-lg items-center'><b>Helpful Links</b></div>
                            <div className='flex justify-center items-center'>About Us</div>
                            <div className='flex justify-center items-center'>Contact Us</div>
                            <div className='flex justify-center items-center'>Careers</div>
                        </div>
                        <div className='bg-[#181E2D] grid grid-rows-5 text-white'>
                            <div className='row-span-2 flex justify-center text-lg items-center'><b>Follow Us</b></div>
                            <div className='flex justify-evenly w-full' >
                                <div className='flex justify-center items-center'>
                                    <Image 
                                    src="/fb.png"
                                    alt='facebook'
                                    width={15}
                                    height={15}/>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <Image 
                                    src="/ln.png"
                                    alt='linkedin'
                                    width={15}
                                    height={15}/>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <Image 
                                    src="/x.png"
                                    alt='X'
                                    width={15}
                                    height={15}/>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
                    
                </div>
            </div>
            <div className='border-2 border-[#2D3C65] w-11/12 rounded-lg'>{/*Line */}</div>
            <div className='flex justify-center w-full text-white text-sm'>
                <div>
                    © 2024 MEFIC Capital. All rights reserved.
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer;