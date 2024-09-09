import React, { useEffect, useState } from 'react'
import Photo1 from '../images/MainPhoto.jpg'
import './Hero.css';

const Hero = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const countDownDate = new Date("Oct 05, 2024 16:00:00").getTime();
        const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        setDays(d);
        const h = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        setHours(h);
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        setMinutes(m);
        const s = Math.floor((distance % (1000 * 60)) / 1000);
        setSeconds(s);

        if (distance < 0) {
            setDays(0);
            setHours(0);
            setMinutes(0);
            setSeconds(0);
        }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

  return (
    <>
        <img src={Photo1} class="hero-img"></img>
        <section class="hero-container" id='MisXV'>
            <div class="hero-text-container">
                <div className='hero-text'>
                    <div className='txt-info'>
                        <div className='xv-txt'>María Jaqueline Mendez Delgado</div>
                        <div className='spacer' />
                        <div className="countdown">
                            <div>
                            <p>
                                {" "}
                                {days.toLocaleString("en-US", {
                                minimumIntegerDigits: 2,
                                useGrouping: false,
                                })}{" "}
                            </p>
                            <span>Days</span>
                            </div>
                            <span className="divider">:</span>
                            <div>
                            <p>
                                {" "}
                                {hours.toLocaleString("en-US", {
                                minimumIntegerDigits: 2,
                                useGrouping: false,
                                })}{" "}
                            </p>
                            <span>Hours</span>
                            </div>
                            <span className="divider">:</span>
                            <div>
                            <p>
                                {" "}
                                {minutes.toLocaleString("en-US", {
                                minimumIntegerDigits: 2,
                                useGrouping: false,
                                })}{" "}
                            </p>
                            <span>Minutes</span>
                            </div>
                            <span className="divider">:</span>
                            <div>
                            <p>
                                {" "}
                                {seconds.toLocaleString("en-US", {
                                minimumIntegerDigits: 2,
                                useGrouping: false,
                                })}{" "}
                            </p>
                            <span>Seconds</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero