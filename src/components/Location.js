import React from 'react'
import './Location.css'
import Party_Location from '../images/Location_Party.png'
import Church_Location from '../images/Location_Church.png'

const Location = () => {
  return (
    <>
        <section className='location' id='Location'>
            <div className='xv-container'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 300 300"
                width="100px"
              >
                <path
                  className="cls-1"
                  d="m150,70.76l56,48.35v144.82h-112V119.11l56-48.35m0-13.39c-.8,0-1.6.24-2.15.71l-63.66,54.96c-.72.37-1.19.96-1.19,1.62v156.34c0,2.17,2.56,3.92,5.71,3.92h122.58c3.15,0,5.71-1.76,5.71-3.92V114.67c0-.66-.47-1.25-1.19-1.62l-63.66-54.96c-.55-.48-1.35-.71-2.15-.71h0Z"
                />
                <path
                  className="cls-1"
                  d="m82.65,153.03v110.91H27.65v-86.72l55-24.19m8.48-15.46c-.42,0-.85.08-1.26.26l-71.97,31.65c-.78.34-1.25.97-1.25,1.65v101.89c0,1.05,1.12,1.91,2.51,1.91h71.97c1.39,0,2.51-.85,2.51-1.91v-133.55c0-1.11-1.2-1.91-2.52-1.91h0Z"
                />
                <path
                  className="cls-1"
                  d="m216.85,153.03l55,24.19v86.72h-55v-110.91m-8.56-15.5c-1.27,0-2.44.77-2.44,1.85v133.7c0,1.02,1.09,1.85,2.44,1.85h72.12c1.35,0,2.44-.83,2.44-1.85v-101.98c0-.66-.46-1.27-1.22-1.6l-72.12-31.72c-.39-.17-.81-.25-1.22-.25h0Z"
                />
                <path
                  className="cls-1"
                  d="m150.5,179.33c11.68,0,20.17,6.38,20.48,12.11,0,.08.01.17.02.25v72.31h-41v-72.31c0-.08.01-.17.02-.25.32-5.73,8.8-12.11,20.48-12.11m0-11c-16.96,0-30.78,9.99-31.46,22.51h-.03v84.16h63v-84.16h-.03c-.69-12.52-14.51-22.51-31.46-22.51h0Z"
                />
                <path
                  className="cls-1"
                  d="m150,113.03c7.17,0,13,5.83,13,13s-5.83,13-13,13-13-5.83-13-13,5.83-13,13-13m0-11c-13.25,0-24,10.75-24,24s10.75,24,24,24,24-10.75,24-24-10.75-24-24-24h0Z"
                />
                <line className="cls-2" x1="150" y1="25" x2="150" y2="60.7" />
                <line
                  className="cls-2"
                  x1="133.77"
                  y1="42.85"
                  x2="166.23"
                  y2="42.85"
                />
              </svg>
                <div className='title'>Lugar</div>
                <div className='sec-content'>
                    <div className='loc-church'>
                      <h2>Misa</h2>
                      <img src={Church_Location} className='loc-img'></img>
                      <div className='spacer' />
                      <div className='spacer' />
                      <div className='loc-title'>Santuario de Nuestra Señora de Guadalupe del Centro</div>
                      <div className='loc-desc'>Altamirano 362, Centro, 36500 Irapuato, Gto.</div>
                      <div className='spacer' />
                      <div className='spacer' />
                      <a href='https://maps.app.goo.gl/21MwR6wzddgihbUf7' className='xv-btn' target='_blank'>Ver en mapa</a>
                    </div>
                    <div className='spacer' />
                    <div className='spacer' />
                    <div className='spacer' />
                    <div className='loc-party'>
                      <h2>Fiesta</h2>
                      <img src={Party_Location} className='loc-img'></img>
                      <div className='spacer' />
                      <div className='spacer' />
                      <div className='loc-title'>Salón Alvori</div>
                      <div className='loc-desc'>Arq. Enrique del moral Domínguez, 36826 Irapuato, Gto.</div>
                      <div className='spacer' />
                      <div className='spacer' />
                      <a href='https://maps.app.goo.gl/bSBmAg3CyuEd3MMu9' className='xv-btn' target='_blank'>Ver en mapa</a>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Location