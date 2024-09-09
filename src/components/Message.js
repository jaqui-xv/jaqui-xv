import React from 'react'
import './Message.css'
import Photo from '../images/Photo1.jpg'

const Message = () => {
  return (
    <>
        <section className='message'>
            <div className='xv-container'>
                <div class="img-border">
                    <img src={Photo} alt="Photo of Milford Sound in New Zealand" />
                    <p>María Jaqueline Mendez Delgado</p>
                    <p className='m-bottom-2'>Mis XV años</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Message