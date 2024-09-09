import React from 'react'
import './Gifts.css'

const Gifts = () => {
  return (
    <>
      <section className='gifts section-1' id='Gifts'>
      <div className='xv-container'>
        <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 300 300"
              width="100px"
            >
              <path d="m266,127.01v136.99H34V127.01h232m11-11H23v158.99h254V116.01h0Z" />
              <path d="m289,91.2v23.18H11v-23.18h278m11-11H0v45.18h300v-45.18h0Z" />
              <path d="m60.15,36h0c6.03,0,17.1,2.1,35.62,12.11,9.69,5.24,20.76,14.28,33.29,25.07-17.87-2.3-33.76-5.75-46.93-10.23-20.45-6.95-29.23-14.79-30.62-19.81-.66-2.37-.12-4.93.42-5.18l.5-.24c1.49-.72,3.53-1.71,7.73-1.71m0-11c-7.22,0-11.04,2.1-12.95,3.01-7.19,3.41-7.89,12.33-6.31,18.06,5.9,21.26,54.26,37.87,121.01,40.94-24.55-20.78-43.84-39.35-60.91-48.58-19.68-10.64-32.53-13.43-40.85-13.43h0Z" />
              <path d="m251.25,37.09c3.82,0,5.51.66,5.94.86.54.26,1.07,2.82.42,5.18-1.39,5.02-10.17,12.87-30.62,19.81-13.48,4.58-29.82,8.09-48.22,10.39,9.59-8.99,17.93-16.71,25.64-21.07,16.09-9.08,34.91-15.18,46.85-15.18m0-11c-14.03,0-34.65,6.67-52.25,16.6-14.93,8.43-29.31,25.44-51.8,44.32,66.75-3.07,115.12-19.68,121.01-40.94,1.59-5.73.89-14.65-6.31-18.06-2.77-1.31-6.41-1.92-10.65-1.92h0Z" />
              <line className="cls-1" x1="150" y1="275" x2="150" y2="116.43" />
              <line
                className="cls-2"
                x1="150"
                y1="124.11"
                x2="150"
                y2="86.17"
              />
          </svg>
          <div className='title'>Regalos</div>
          <div className='sec-content'>
            <p className='no-margin'>Mesa de regalos de Liverpool:</p>
            <b className='gift-code'>51426821</b>
            <div className='spacer' />
            <div className='spacer' />
            <a className='xv-btn' href='https://mesaderegalos.liverpool.com.mx/milistaderegalos/51426821' target='_blank'>Ir a mesa de regalos</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Gifts