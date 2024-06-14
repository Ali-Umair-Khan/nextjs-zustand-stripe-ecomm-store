/* eslint-disable @next/next/no-img-element */
'use client'
import { useSearchParams } from 'next/navigation';
import UseStore from '../(store)/store';
// import {useRouter} from 'next/navigation';


export default function ProductPage(){
    const searchParams = useSearchParams();
    // const router = useRouter();
    // const{price_id}=searchParams;
    // const price_id = router.query;
    const price_id = searchParams.get('price_id');
    const product = UseStore(state=>state.product);
    const addItemToCart = UseStore(state=>state.addItemToCart);
    const {name, images, description, cost}=product;

    if(!product?.name){
        window.location.href = '/'
    }

    const cartAddition = () => {
        console.log('PRICE ID: ', price_id);
        const item = {
            name,
            quantity:1,
            cost,
            price_id
        };
        console.log('item added to cart',item);
        addItemToCart({item});
    }

    return(
        <div className='container mx-auto flex flex-col items-center justify-between gap-4'>
                <div className='w-full h-[80vh] max-w-xl aspect-square'>
                    <img src={images[0]} alt={name} className='w-full h-full object-cover'/>
                </div>
                <div className='flex items-center justify-between gap-4'>
                    {/* <h1 className='text-gray-500 text-2xl'>{name}</h1> */}
                    <p className='text-slate-500 text-2xl'>{description}</p>
                    <h2 className='text-slate-900 text-2xl font-bold'>${cost/100}</h2>
                </div>
                <button onClick={cartAddition} className='bg-slate-700 hover:bg-slate-500 text-white text-2xl px-4 py-2 my-2 mx-auto'>Add to Cart</button>
        </div>
    )
}