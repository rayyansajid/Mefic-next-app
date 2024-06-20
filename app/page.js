import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
export default function Home() {
  return (
    <>
    <Navbar />
    {/* <div className=" flex flex-col w-fit ml-8 gap-5" style={{height:'25rem', justifyContent:'center'}}>
      <div>
        <button className='text-white hover:bg-white hover:text-black rounded-lg' style={{background: '#2D3C65'}}>
          <p className='p-2'>Book a Consultant</p>
        </button>
      </div>
      <div>
        <p className="text-white text-xl">
        Your future financial <br/> <b>Investment made</b> easier <br/> with <span className="font-weight-extrabold" style={{color:'#E95A0C'}}>MEFIC</span>
        </p>
      </div>
      <div className='border-2' style={{borderColor: '#2D3C65'}}></div>
      <div>
      <p style={{color:'#C3C3C3'}}>
        Office ipsum you must be muted. Conversation banner gave dive investigation chime usabiltiy whatever.<br/>
        Winning of crystallize another container reinvent stands. Left you viral relaxation unlock t-shaped. Ideal deck<br/>
        support attached waste highlights game synchronise.
      </p>
      </div>
      <div>
      <button className='text-white hover:bg-white hover:text-black rounded-lg' style={{background: '#E95A0C'}}>
        <p className='p-2'>Book a Consultant</p>
      </button>
      <button className='text-white border-red-500 rounded-md ml-8' style={{borderWidth:"3px"}}>
        <p className="px-3 py-1">Login</p>
      </button>
      </div>
    </div> */}
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Footer />
    </>
  );
}
