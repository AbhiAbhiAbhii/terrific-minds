/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Title from '../../components/Title/title'
import Address from '../../components/Address/address'


/**
 * @typedef {import("@prismicio/client").Content.LocationShowCaseSlice} LocationShowCaseSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LocationShowCaseSlice>} LocationShowCaseProps
 * @param { LocationShowCaseProps }
 */
export default function LocationShowCase() {

  // The Atomic, near, Technopark Phase 1, Technopark Campus, Thiruvananthapuram, Kerala 695582

  let arrObj = [
    {
      city:'Orlando',
      addressA:'115 N Stewart Avenue,',
      addressB:'Unit 1C,Kissimme,',
      addressC:'FL 34747,',
      addressD:'USA'
    },
    {
      city:'Trivandrum',
      addressA:'The Atomic, near,',
      addressB:'Technopark Phase 1,',
      addressC:'Technopark Campus, Thiruvananthapuram, ',
      addressD:'Kerala 695582'
    },
    {
      city:'Kochi',
      addressA:'7H, Tower 2,',
      addressB:'TransAsia Cyber Park,',
      addressC:'Infopark Phase 2,',
      addressD:'Kerala, India'
    },
    {
      city:'Perth',
      addressA:'Level 27,',
      addressB:'St Martin’s Tower,',
      addressC:'44 St George’s,',
      addressD:'Perth WA 6000'
    }
  ]

  return(
    <section className='loc' style={{background:'#FFF'}}>
      <div className='locContainer'>
        <Title titleA='We are here' />
        <div className='locContentWrap'>
          <div className='locContentA'>
            <div style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}>
              <div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'90%'}}>
                <img style={{height:'100%', width:'100%', objectFit:'cover'}} src='/map.svg' alt='map' />
              </div>
            </div>
            <div className='addrsWrap' style={{display:'flex', alignItems:'center', justifyContent:'space-around', margin:'1rem 0 0 0'}}>
              {
                arrObj.map((data, i) => {
                  return(
                    <Address style={{}} key={i}
                      data={data} />
                  )
                })
              }
            </div>
          </div>
          <div className='locContentB'>
            <div className='locImgContainer' style={{}}>
              <img style={{height:'100%', width:'100%', objectFit:'contain'}} src='/locImgShowcase.svg' alt='Image' />
            </div>
          </div>
        </div>  
      </div>
    </section>
  )
}