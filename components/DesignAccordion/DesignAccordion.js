/* eslint-disable @next/next/no-img-element */
import { useState } from "react"

export default function DesignAccordion({obj, i, style, onClick, selected}) {

    // const [selected, setSelected] = useState(false);


    // const toggle = (i) => {

    //     if(selected == i) {
    //         if the current index is selected, then close it
    //         return setSelected(null)
    //     }
    //     else {
    //         if the current index is not selected, then open it
    //         setSelected(i);
    //     }
    //     setSelected(i);
    // }
    


   


    return(
        <div className="dsgnAccord"  style={{padding:'0.5rem 2rem'}}>
            <div onClick={onClick} style={{width:'100%', padding:'1rem 0', cursor:'pointer'}}>
                <div className="accordTitle helMed" style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                    <div style={style}>
                        <p>{obj.title}</p>
                    </div>
                    <div className="arrContB"><img style={{height:'40%', width:'40%', objectFit:'cover', transform: selected == i ? 'rotate(180deg)':'', transition:'all .5s ease'}} src="/accordArrow.svg" alt="" /></div>
                </div>
            </div>
            <div className="accordContent aN1"  style={{ height: selected == i ? '370px':'0px', overflow:'hidden'}}
            // className={
            //     selected == i ? "accordContent Show aN1" : "accordContent aN1"
            // } 
            >
                <div style={{padding:'0 2rem'}}>
                    <ul className="helReg">
                        <li>{obj.listItem[0]}</li>
                        <li>{obj.listItem[1]}</li>
                        <li>{obj.listItem[2]}</li>
                        <li>{obj.listItem[3]}</li>
                        <li>{obj.listItem[4]}</li>
                    </ul>
                </div>
                <div style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'flex-start', padding:'1rem 0'}}>
                    <div className="accordGif">
                        {/* <img style={{height:'100%', width:'100%', objectFit:'cover'}} src={obj.src} alt="logo" /> */}
                        <video autoPlay="true" muted="true" loop="true" playsInline="true" height="100%" width="100%" type="video/mp4" style={{height:'100%', width:'100%', objectFit:'cover'}} src={obj.src} alt="video" />
                    </div>
                </div>
            </div>
        </div>
    )
}