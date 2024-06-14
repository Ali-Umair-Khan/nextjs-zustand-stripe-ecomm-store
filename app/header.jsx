'use client'
import Link from 'next/link';
import UseStore from './(store)/store';
import Modal from './modal';

export default function Header() {
    const cartItems = UseStore(state=>state.cart);
    const openModal = UseStore(state=>state.openModal);
    const setOpenModal = UseStore(state=>state.setOpenModal);
    // const headerStyling = `flex justify-between items-center text-blue-700 text-center sticky top-0 left-0 p-6 bg-white border-b 
    // border-solid border-blue-900 shadow-md z-50 text-2xl sm:text-3xl md-4xl sm:p-8`;

    return(
        <header className={`flex justify-between items-center text-blue-700 text-center p-1 bg-white 
        border-b border-solid border-blue-900 shadow-md z-50 text-2xl sm:text-3xl sm:p-8`}>
        {openModal && <Modal/>}
        <Link href={'/'}><h1 className='cursor-pointer hover:scale-110 text-blue-500 uppercase'>Furnit</h1></Link>
        <div onClick={setOpenModal} className='relative cursor-pointer grid place-items-center'>
            {cartItems.length > 0 && (
                <div className={`absolute top-0 aspect-square pointer-events-none h-5 sm:h-6 grid place-items-center text-slate-500 
                rounded-full right-0 -translate-y-1/2 translate-x-1/2`}>
                    <p className='text-xs sm:text-sm'>{cartItems.length}</p>
                </div>
            )}
            <i className="fa-solid hover:text-slate-500 cursor-pointer fa-cart-shopping"></i>
        </div>
        </header>
    )
}