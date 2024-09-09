import React from 'react'
import './Date.css'

const Date = () => {
  return (
    <>
        <section className='section-1 date' id='Date'>
            <div className='xv-container'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 300 300"
                width="100px"
              >
                <path d="m254.39,45.04c3.34,0,6.06,2.72,6.06,6.06v208.47c0,3.35-2.73,6.08-6.08,6.08H45.62c-3.35,0-6.08-2.73-6.08-6.08V51.1c0-3.34,2.72-6.06,6.06-6.06h208.79m0-11H45.61c-9.42,0-17.06,7.64-17.06,17.06v208.47c0,9.43,7.65,17.08,17.08,17.08h208.75c9.43,0,17.08-7.65,17.08-17.08V51.1c0-9.42-7.64-17.06-17.06-17.06h0Z" />
                <line
                  className="cls-1"
                  x1="271.46"
                  y1="103.09"
                  x2="28.54"
                  y2="103.09"
                />
                <g>
                  <line
                    className="cls-2"
                    x1="102.13"
                    y1="26.65"
                    x2="102.13"
                    y2="59.26"
                  />
                  <line
                    className="cls-2"
                    x1="197.87"
                    y1="26.65"
                    x2="197.87"
                    y2="59.26"
                  />
                </g>
              </svg>
                <div className='title'>Fecha</div>
                <div className='sec-content'>
                  <h3>Sábado 5 de octubre de 2024</h3>
                  <div className='spacer'></div>
                  <p>La ceremonia religiosa comenzará a las 16:00 horas, la recepción en el salón comenzará a partir de las 18:00 horas.</p>
                  <div className='spacer'></div>
                  <div>
                      <a target='_blank' href='https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NDM4ZDljNDg3ZXJiaGNuNHU1dWl2Z2Q3dGYgNDQ4MjE1NzU2YzQ0ODNjYjIyZjI1NmM1MDhhYmRhYTRlMWVmODYwMjA3YzhkZTQzN2M3ODI0MzQzODM4MGQ0ZUBn&tmsrc=448215756c4483cb22f256c508abdaa4e1ef860207c8de437c78243438380d4e%40group.calendar.google.com' className='xv-btn'>Agregar a tu calendario</a>
                  </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Date