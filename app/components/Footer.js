import React from 'react';
import styles from './styles/footer.module.css';
import Image from 'next/image';
// import '@./public/Tree.png';

const Footer = () => {
  return (
    <div className={`${styles['footer-main-container']} bg-slate-500`}>
        <div className={`bg-black ${styles['footer-inner-container']}`}>
            <div className={`${styles.div1} bg-green-400`}>
                <div className='px-5 py-4' style={{height:"fit-content"}}>
                    <Image src='/Tree.png'
                    alt="Pic of Tree"
                    width='50'
                    height='50'
                    className='image' 
                    style={{display:"inline"}}/>
                    <Image src='/Healthx.png'
                    alt="Pic of Tree"
                    width={50}
                    height={50}
                    className='image'
                    style={{display:"inline", paddingLeft:"1px"}} />
                </div>
                <div className='px-5 text-xl' style={{display:"block"}}>
                Healthcare Solutions <br/> For All
                </div>
                <div className='p-5'>
                    AUSTIN, Texas, Jan.11, 2024 -- Ambiq@
                </div>
                <div >
                    <div className='p-5'style={{display:"flex",gap:"10px"}}>
                    <Image 
                    src="/fb.png"
                    alt='facebook'
                    width={10}
                    height={10}/>
                    
                    <Image 
                    src="/ln.png"
                    alt='linkedin'
                    width={10}
                    height={10}/>
                    
                    <Image 
                    src="/x.png"
                    alt='X'
                    width={10}
                    height={10}/>
                    
                    <Image 
                    src="/insta.png"
                    alt='Instagram'
                    width={10}
                    height={10}/></div>
                </div>

            </div>
            <div className={`${styles.div2} bg-blue-100`}>
                <div className={`${styles['div2-1']}`}>
                    <div className='py-5' style={{display:"flex",alignItems:"center",justifyContent:"center",}}>
                        Quick Links
                    </div>
                </div>
                <div className={`${styles['div2-2']}`}>
                <div className='py-5' style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                Resources</div>
                </div>
                <div className={`${styles['div2-3']}`}>
                <div className='py-5' style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                Our Information</div>
                </div>
                <div className={`${styles['div2-4']} px-3 text-sm`}>
                About us <br/>
                FAQs    <br/>
                New's and Media <br/>
                Contact us <br/>
                Digital Videos <br/>
                </div>
                <div className={`${styles['div2-5']} text-sm`}>
                Individuals & Families <br/>
                Corporate Health Solutions<br/>
                Health Incurrence<br/>
                Government Health Initiate
                </div>
                <div className={`${styles['div2-6']} text-sm`}>
                    <Image
                    src="/sms.png"
                    alt='sms'
                    width={15}
                    height={15}
                    style={{display:"inline",paddingRight:"3px"}}/>                
                info@healthxpakistan.com <br/><br/>
                <Image
                    src="/Vector.png"
                    alt='phone'
                    width={15}
                    height={15}
                    style={{display:"inline",paddingRight:"3px"}}/>
                021 382 824 33<br/><br/>
                <Image
                    src="/location.png"
                    alt='location'
                    width={15}
                    height={15}
                    style={{display:"inline",paddingRight:"3px"}}/>
                Address: 4th floor, Elegant tower,<br/> plot no
                BC-2, Khayaban-e- Iqbal,<br/> Block no 5, KDA
                Scheme No 5, <br/> Clifton, Karachi, Pakistan
                </div>
            </div>
            {/* <br /> */}
            {/* <span></span> */}
            <div className={`${styles.div3} bg-red-400`}>
                I am in Div-3
            </div>
            {/* <span ></span> */}
            {/* <br /> */}
            <div className={`${styles.div4} bg-orange-400`}>
                I am in Div-4
            </div>
        </div>
    </div>
  )
}

export default Footer