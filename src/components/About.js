import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
        <section className='about' id='Quinceañera'>
            <div className='xv-container'>
              <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 24 24" fill="none">
                <path d="M3 8L4.44293 16.6576C4.76439 18.5863 6.43315 20 8.38851 20H15.6115C17.5668 20 19.2356 18.5863 19.5571 16.6576L21 8M3 8L6.75598 11.0731C7.68373 11.8321 9.06623 11.6102 9.70978 10.5989L12 7M3 8C3.82843 8 4.5 7.32843 4.5 6.5C4.5 5.67157 3.82843 5 3 5C2.17157 5 1.5 5.67157 1.5 6.5C1.5 7.32843 2.17157 8 3 8ZM21 8L17.244 11.0731C16.3163 11.8321 14.9338 11.6102 14.2902 10.5989L12 7M21 8C21.8284 8 22.5 7.32843 22.5 6.5C22.5 5.67157 21.8284 5 21 5C20.1716 5 19.5 5.67157 19.5 6.5C19.5 7.32843 20.1716 8 21 8ZM12 7C12.8284 7 13.5 6.32843 13.5 5.5C13.5 4.67157 12.8284 4 12 4C11.1716 4 10.5 4.67157 10.5 5.5C10.5 6.32843 11.1716 7 12 7Z" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
                <div className='title'>Padres</div>
                <div className='sec-content'>
                  <div className='parents'>
                      <div className='parent-1'>
                        <div className='parent'>Yessika Lisbeth Delgado Moya</div>
                        <div className='parent desc'>Madre</div>
                      </div>
                      <div className='parent-separator'>&</div>
                      <div className='parent-2'>
                        <div className='parent'>Tito Mendez Vela</div>
                        <div className='parent desc'>Padre</div>
                      </div>
                  </div>
                  <div className='spacer' />
                  <div className='title'>Padrinos</div>
                  <div className='parents'>
                      <div className='parent-1'>
                        <div className='parent'>Brenda Berenice Delgado Moya</div>
                        <div className='parent desc'>Madrina</div>
                      </div>
                      <div className='parent-separator'>&</div>
                      <div className='parent-2'>
                        <div className='parent'>Jose Antonio Magaña Ramirez</div>
                        <div className='parent desc'>Padrino</div>
                      </div>
                  </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About