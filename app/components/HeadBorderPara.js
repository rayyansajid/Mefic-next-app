import React from 'react'

const HeadBorderPara = (props) => {
  const beforeBold = props.beforeBold;
  const boldText = props.boldText;
  const afterBold = props.afterBold;
  const orangeText = props.orangeText;
  const textColor = props.textColor;
  const para = props.para;

  return (
    <>
    <div className='justify-items-center ' style={{width: props.headingWidth || "30%"}}>
        <p className="text-3xl" style={{color:`${textColor}`}}>
          {beforeBold} {/*<br/>*/} <b>{boldText}</b> {afterBold} {/*<br/>*/} 
          <span className="font-weight-extrabold" style={{color:'#E95A0C'}}>
            <b>{orangeText}</b>
          </span>
        </p>
    </div>
    <div className='border-2 rounded-lg' style={{borderColor: '#2D3C65', width:props.borderWidth || "50%"}}></div>
    <div style={{width : props.paraWidth ||'60%'}}>
      <p style={{color:'#C3C3C3'}}>
        {/* Office ipsum you must be muted. Conversation banner gave dive investigation chime usabiltiy whatever.<br/>
        Winning of crystallize another container reinvent stands. Left you viral relaxation unlock t-shaped. Ideal deck<br/>
        support attached waste highlights game synchronise. */}
        {para}
      </p>
    </div>
    </>
  )
}

export default HeadBorderPara