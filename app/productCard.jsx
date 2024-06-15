/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react';
import {useRouter} from 'next/navigation'
import UseStore from './(store)/store';

export default function ProductCard({product,text}){
    const {id:price_id,product:productData,unit_amount:cost} = product;
    const {images,name,description}= productData;
    const setProduct = UseStore(state=>state.setProduct);
    const router = useRouter();
    console.log(images);

    const onProductClick = () => {
        const newProduct = {
            price_id,
            name,
            images,
            description,
            cost
        };
        console.log('new product', newProduct);
        setProduct({newProduct});
        // router.push('/product?price_id=' + price_id);
        router.push(`/product?price_id=${price_id}`);

    }

      

    return(
        <div  className={`relative snap-center shrink-0 w-screen max-h-[100vh] aspect-square 
         h-screen bg-black flex items-center justify-center text-2xl  max-w-[100vw] rounded 
        overflow-auto shadow-lg hover:shadow-sm`}>
                <img src={images[0]} alt={description} className='h-full w-full object-center object-scale-down aspect-square'/>
                <div className={`flex flex-col justify-between items-center gap-1 p-2 text-sm m-1 ml-2 shadow-xl
                 shadow-gray-500 rounded-sm absolute top-4 left-[25%] -translate-x-1/2 + ${text ? 'bg-transparent sm:bg-slate-200 text-white md:text-black sm:text-black': 'bg-slate-300 text-black'}`} title='scroll left to see more products'>
                    <h1 className='text-xl'>{description}</h1>
                    <p onClick={onProductClick} className='text-xl cursor-pointer font-italic underline'> click to get it in  ${cost/100}</p>
                    <i className='text-xl' title='click here to add product to cart'>scroll left to see more ---&gt;</i>
                </div>            
        </div>
    )
}

             // <h1 className='font-bold text-xl mb-2 p-2 text-center'>{name}</h1>
