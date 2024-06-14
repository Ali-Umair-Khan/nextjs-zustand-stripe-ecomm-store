'use client'
import { Link } from "react-scroll"
import './navbar.scss'

const Navbar = () => {
    return(
            <section className='navbar'>
                <div className='navbar__left'>
                    <div className='navbar__left-image'>
                        <img src='ak.gif' alt=""/>
                    </div>
                    <h2 className='navbar__left-name'>Ali Umair Khan</h2>
                </div>
                <nav className='navbar__right'>
                    <ul>
                        <li>
                            <Link to='me'  smooth={true} duration={500}>
                                <a>Who I am</a>
                            </Link>
                        </li>
                        <li>
                            <Link to='work'  smooth={true} duration={500}>
                                <a>Work</a>
                            </Link>
                        </li>
                        <li>
                            <Link to='services'  smooth={true} duration={500}>
                                <a>Services</a>
                            </Link>
                        </li>
                        <li>
                            <Link to='charge'  smooth={true} duration={500}>
                                <a>Charging</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                
            </section>
    )
}

export default Navbar