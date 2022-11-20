import React from 'react'
import './header.css'
/* import CTA from './CTA' */
import ME from '../../../assets/jellyfish.png'
import HeaderSocial from './HeaderSocials.jsx'



const Header = () => {
    return (
        <section id="home">
            <header>
                <div className="container header__container">
                    <h5>El Psy</h5>
                    <h1>Congroo</h1>
                    <h5 className="text-light">. . .</h5>
                    <div className='choice'>
                        <a href="#about" className='btn'>Explore</a>
                        <a href="/leave" className='btn btn-primary'>Leave</a>
                    </div>
                    {/* <CTA /> */}
                    <HeaderSocial />

                    <div className="me">
                        <img src={ME} alt="me" />
                    </div>

                    <a href="#contact" className='scroll__down'>To Bottom</a>
                </div>
            </header>
        </section>
    )
}


export default Header
