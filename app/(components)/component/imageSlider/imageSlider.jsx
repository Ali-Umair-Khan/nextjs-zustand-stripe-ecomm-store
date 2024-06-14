/* eslint-disable @next/next/no-img-element */
'use client'
// import {useInView} from 'framer-motion';
// import { useRouter } from 'next/navigation'

// import axios from 'axios';
// import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import './imageSlider.scss'; // Create a CSS file for styling
import useStore from '../../(store)/store';
// import ImmerStore from '../../(store)/immerStore';
const ImageSlider = () => {
  // const router = useRouter()

  // const ref = useRef(null);
  // const isInView = useInView(ref);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // const {data:dataI}=ImmerStore();
  // const images = [
  //   'h/h1.jpg',
  //   'h/h2.jpg',
  //   'h/h4.jpg',
  //   'h/h5.jpg',
  //   'h/h6.jpg',
  //   'h/h7.jpg',
  //   'h/h8.jpg',
  //   'h/h9.jpg',
  //   'h/h10.jpg'
  // ];
  // useEffect(()=>{
  // fetchData();
  // },[])


  // const images = [
  //   {src:'h/h1.jpg',text: {brand:'Chairoy', stylist:'Matthew', price:'$3400'}},
  //   {src:'h/h2.jpg',text: {brand:'Bizdam', stylist:'Preston', price:'$2400'}},
  //   {src:'h/h3.jpg',text: {brand:'Bussarat', stylist:'Krecey', price:'$5100'}},
  //   {src:'h/h4.jpg',text: {brand:'Sebe', stylist:'Pisoio', price:'$9100'}},
  //   {src:'h/h5.jpg',text: {brand:'Chairoy', stylist:'Matthew', price:'$3400'}},
  //   {src:'h/h6.jpg',text: {brand:'Bussarat', stylist:'Krecey', price:'$5100'}},
  //   {src:'h/h7.jpg', text: {brand:'Bizdam', stylist:'Preston', price:'$2400'}},
  //   {src:'h/h8.jpg',text: {brand:'Sebe', stylist:'Pisoio', price:'$9100'}},
  //   {src:'h/h9.jpg',text: {brand:'Chairoy', stylist:'Matthew', price:'$3400'}},
  //   {src:'h/h10.jpg',text: {brand:'Bussarat', stylist:'Krecey', price:'$5100'}},
  //  ];
  const intervalIdRef = useRef(null);
  
    const [images,setImages]=useState([]);
   const {data} = useStore();
   console.log('data is ', data);
   const horizontal = data.filter(obj => obj.filename.includes('-h'));
  //  console.log('horizontal', horizontal);
  // const type='h';

   useEffect(() => {

    const fetchImages = async () => {
     
      try {
        // const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'your_cloud_name_here' });
        // const resources = await cloudinary.search.expression('h').execute();
        // const response = await axios.get(`http://localhost:3001/images/${type}`);
        // setImages(response.data);
        // const horizontal = data.filter(obj => obj.filename.includes('-h'));
        const updatedImages = horizontal.map((image) => {
        const parts = image.filename.split('-');
        const brand = parts[2];
        const price = parseInt(parts[3]);

        const data = { brand, price };

        return { ...image, data };
        });
        setImages(updatedImages);
        // console.log(updatedImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, [horizontal]);


  useEffect(() => {
     intervalIdRef.current = setInterval(() => {
      // Increment the current image index, and loop back to 0 if it exceeds the number of h
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 30000);

    return () => {
      // Cleanup the interval when the component unmounts
      clearInterval(intervalIdRef.current);
    };
  }, [images.length]);

  // const prevImage = () => {
  //   setCurrentImageIndex((prevIndex) => (prevIndex - 1) % images.length);
  // }

  return (
    <div>
          { (images.length > 0) && 
          <div className='image__slider'>
            <img src={images[currentImageIndex].url} alt={images[currentImageIndex].filename} />  
            <div className='image__slider-text'>
                    <p className='image__slider-text__brand'> {images[currentImageIndex].data.brand}</p>
                    <p className='image__slider-text__price'>${images[currentImageIndex].data.price}</p>
                    {/* <button target="_blank" passHref={true} onClick={() => router.push(`/${images[currentImageIndex].filename}`)} className='image__slider-text__more'>&gt; more</button> */}
                    <Link href={`/product/${images[currentImageIndex].filename}`} target="_blank" passHref={true} className='image__slider-text__more'>&gt; more</Link>
            </div> 
          </div>
          }
    </div>
  );
}

export default ImageSlider
