/* eslint-disable @next/next/no-img-element */
'use client'
// import Link from 'next/link';
import { Link } from "react-scroll";
// import {Link as NextLink} from 'next/link';
import './style4.scss';
// import './navbar.scss';
import React, {useState, useRef} from 'react';
import { useClickAway } from "react-use";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import UseStore from '../../../(store)/store';
import UseStore from '../../../(store)/store.js';
import Modal from '../../../modal';
// import {Link as NLink} from 'next/navigation';
// import {useRouter} from 'next/router';

import {
  faWindowMinimize,
  faBars,
  faUser,
  faDollarSign,
  faHurricane,
  faAddressBook,
  faWrench
} from "@fortawesome/free-solid-svg-icons";

const ResponsiveMenu = () => {
    const cartItems = UseStore(state=>state.cart);
    const openModal = UseStore(state=>state.openModal);
    const setOpenModal = UseStore(state=>state.setOpenModal);

    const router = useRouter();
  const linkUrl = 'https://calendly.com/aliumairkhan/30min';

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    // setTimeout(() => {
      setMenuOpen(false);
    // }, 50); // Adjust the delay time as needed

  //   Events.scrollEvent.register('end', () => {
  //   setMenuOpen(false);
  // });

   };

  // onChange={handleMenuToggle}
  // style={{ mask: 'url(#curved-mask)' }}

  // Ref to store a reference to the DOM element
  const ref = useRef(null);

  // Custom hook to detect clicks outside of the navigation and close it
  useClickAway(ref, handleMenuItemClick);

    return(
        <nav>
                {openModal && <Modal/>}
            <ul className='navbar'>
                <div className='navbar__left' onClick={handleMenuItemClick}>
                    <div className='navbar__left-image'>
                       {/* <h1 onClick={() => { router.push('/')}} className='cursor-pointer'>CRETIS</h1> */}
                        <h1 className='cursor-pointer'>CRETIS</h1>
                    </div>
                </div>
                {/* <li onClick={handleMenuItemClick} className='navbar__logo'><Link href='/'><img src='ak.gif' alt="" /></Link></li> */}
                <input type='checkbox' id='check' className='navbar__checkbox' checked={menuOpen} onChange={handleMenuToggle}/>
                <span className='navbar__menu' ref={ref}>
                    {/* <li onClick={handleMenuItemClick}>
                      <Link to='me'  smooth={true} duration={500}>
                          <a onClick={handleMenuItemClick}>Who I am</a>
                      </Link>
                    </li> */}
                    <li onClick={handleMenuItemClick} className='navbar__menu-item'>
                      <Link to='work'  smooth={true} duration={1000}>
                          <a onClick={handleMenuItemClick}>Furniture Types<FontAwesomeIcon icon={faHurricane} style={{ fontSize: '1.6rem', marginLeft:'0.5rem'}} /></a>
                          <div className='dropdown-menu'>
                            <p>Accessories</p>
                            <p>Bedroom</p>
                            <p>Dinning Room</p>
                            <p>Others</p>
                          </div>
                      </Link>
                    </li>
                    <li onClick={handleMenuItemClick} className='navbar__menu-item'>
                      <Link to='services'  smooth={true} duration={1000}>
                          <a onClick={handleMenuItemClick}>Brands <FontAwesomeIcon icon={faWrench} style={{ fontSize: '1.6rem', marginLeft:'0.5rem'}} /></a>
                          <div className='dropdown-menu'>
                            <p>SEBE</p>
                            <p>BIZDAM</p>
                            <p>CHAIROY</p>
                            <p>BUSSARAT</p>
                          </div>
                      </Link>
                    </li>
                    <li onClick={handleMenuItemClick} className='navbar__menu-item'>
                      <Link to='charging' smooth={true} duration={1000}>
                          <a onClick={handleMenuItemClick}>Specials <FontAwesomeIcon icon={faDollarSign} style={{ fontSize: '1.6rem', marginLeft:'0.5rem'}} /></a>
                          <div className='dropdown-menu'>
                            <p>Queen Bedroom Sets | $1200</p>
                            <p>Mattresses | $1000</p>
                            <p>Sectionals | $1300</p>
                            <p>Sofa & Ottomans Sets | $1400</p>
                          </div>
                      </Link>
                    </li>
                
                    <li onClick={handleMenuItemClick}><a href={linkUrl} target="_blank" rel="noopener noreferrer" onClick={handleMenuItemClick}>Contact <FontAwesomeIcon icon={faAddressBook} style={{ fontSize: '1.6rem', marginLeft:'0.5rem'}} /></a></li>
                    <div onClick={setOpenModal} className='relative cursor-pointer grid place-items-center'>
                        {cartItems.length > 0 && (
                            <div className={`absolute top-2 aspect-square pointer-events-none h-5 sm:h-6 grid place-items-center text-slate-500 
                            rounded-full right-0 -translate-y-1/2 translate-x-1/2`}>
                                <p className='text-sm sm:text-md'>{cartItems.length}</p>
                            </div>
                        )}
                        <i className="fa-solid text-slate-900 hover:text-slate-500 cursor-pointer fa-cart-shopping" style={{fontSize:'3.2rem'}}></i>
                    </div>
                    <label htmlFor='check' className='navbar__close'><FontAwesomeIcon icon={faWindowMinimize} style={{ fontSize: '2rem'}}/></label>
                </span>
                <label htmlFor='check' className='navbar__open'><FontAwesomeIcon icon={faBars} style={{ fontSize: '3rem' }}/></label>
            </ul>
        </nav>
    )
}


export default ResponsiveMenu