/* eslint-disable @next/next/no-img-element */

export default function BespokeLogo({obj, style, logoText}) {
    return(
        <div className="bspkLogoItem" style={style}>
            <div className="bespkLogoContainer"><img style={{height:'100%', width:'100%', objectFit:'cover'}} src={obj.src} alt="logo" /></div>
            <div className="bespkLogoText helMed" style={{color:'#000'}}><p>{obj.logoText}</p></div>
        </div>
    )
}