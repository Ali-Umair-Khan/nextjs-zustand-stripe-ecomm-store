'use client'
import ReactDom from 'react-dom';
import UseStore from './(store)/store';
// import useRouter from 'next/navigation';
import { useRouter } from 'next/navigation';
import toWords from 'num-to-words';

export default function Modal() {
    const cartItems = UseStore(state=>state.cart);
    console.log(cartItems);
    const setModal = UseStore(state=>state.setOpenModal);
    const clearCart = UseStore(state=>state.clearCart);
    const removeItem = UseStore(state=> state.removeItemFromCart);
    const f = (total,item) => {
        return total+(item.quantity * item.cost);
    }
    const totalCost = cartItems.reduce(f,0);

    const router = useRouter();

    const modalCardStyling = `absolute top-0 right-0 flex flex-col place-center h-screen justify-around gap-4 sm:w-96
     w-screen shadow-lg max-w-screen z-20 bg-white`;

    const checkoutBtnStyling = `border border-solid border-transparent text-xl px-2 py-1 rounded-sm cursor-pointer text-center
     hover:text-slate-900 text-white bg-blue-800 hover:bg-blue-300 transition-colors duration-1000`;

     async function checkout() {
        const lineItems = cartItems.map((cartItem,index)=>{
            return{
                quantity:cartItem.quantity,
                price:cartItem.price_id
            }
        });
        const res = await fetch('/api/checkout',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({lineItems})
        });
        const data = await res.json();
        router.push(data.session.url);
     }
     
    return ReactDom.createPortal(
                <div className='fixed top-0 left-0 h-screen w-screen z-50'>
                    <div className='absolute inset-0 bg-transparent' onClick={setModal}></div>
                    <div className={`absolute top-0 right-0 flex flex-col place-center h-screen justify-around gap-4 sm:w-1/4
     w-screen shadow-lg max-w-screen z-20 bg-white`}>
                        <div className='flex flex-col items-center justify-between gap-4 relative p-6'>
                            <div className='flex items-center justify-between text-xl mx-6 gap-4'>
                                <h1 className='text-3xl'>Cart</h1>
                                <i onClick={setModal} className='fa-solid fa-xmark text-4xl cursor-pointer hover:opacity-60'></i>
                            </div>
                            <div className='absolute bottom-0 left-1/2 bg-slate-400 h-[1px] mt-4 w-2/3 -translate-x-1/2'></div>
                        </div>
                        <div className='p-4 flex flex-col justify-between items-center gap-4'>
                            {cartItems.length === 0 ? <p className='text-2xl text-slate-800'>Cart is empty</p> : (
                                <>  
                                {cartItems.length > 0 && cartItems.map((cartItem,index)=> {
                                    const values = cartItem.name.split("-");
                                    const priceId = cartItem.price_id;
                                    const p = cartItem.quantity === 1 ? 'piece' : 'pieces';
                                    return(
                                        <div key={index}>
                                            <div className='flex flex-col items-center justify-between gap-2 shadow-lg m-1 p-3'>
                                                <div className='flex justify-center items-center gap-1 text-xl'>
                                                    <h1>{`${toWords(cartItem.quantity)} ${p} of, ${values[3]} by ${values[2]} for $${cartItem?.cost/100*cartItem.quantity}`}</h1>
                                                    <i className="fa-solid fa-minus text-md p-2 cursor-pointer" title="Remove item" onClick={()=>removeItem({priceId})}></i>
                                                    {/* <p>${cartItem?.cost/100}</p> */}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                </>
                            )}
                        </div>
                        <p className='text-slate-900 text-xl bg-blue-100 py-3 px-3 my-1 rounded-sm text-center mx-auto w-1/2.5'>{totalCost > 0 && `Total cost: $${totalCost/100}`}</p>
                        <div className='flex items-center justify-around gap-1'>     
                            <div onClick={checkout} className={checkoutBtnStyling}>Checkout</div>
                            <div onClick={clearCart} className={checkoutBtnStyling}>Clear Cart</div>
                        </div>
                    </div>
                </div>,
                document.getElementById('portal')
)
}