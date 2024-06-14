/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState,useEffect } from 'react';
// import axios from 'axios';
import ProductCard from '../../../productCard';
import './manualSlider.scss'; // Import your CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
//   faWindowMinimize,
//   faBars,
//   faUser,
//   faDollarSign,
//   faHurricane,
//   faAddressBook,
//   faWrench,
  faGreaterThan,
  faLessThan
} from "@fortawesome/free-solid-svg-icons";


const ManualSlider = ({vertical}) => {

  //   const images = [
  //   {src:'v/v1.jpg',text: {brand:'Chairoy', stylist:'Matthew', price:'$3400'}},
  //   {src:'v/v2.jpg',text: {brand:'Bizdam', stylist:'Preston', price:'$2400'}},
  //   {src:'v/v3.jpg',text: {brand:'Bussarat', stylist:'Krecey', price:'$5100'}},
  //   {src:'v/v4.jpg',text: {brand:'Sebe', stylist:'Pisoio', price:'$9100'}},
  //   {src:'v/v5.jpg',text: {brand:'Chairoy', stylist:'Matthew', price:'$3400'}},
  //   {src:'v/v6.jpg',text: {brand:'Bussarat', stylist:'Krecey', price:'$5100'}},
  //   {src:'v/v7.jpg', text: {brand:'Bizdam', stylist:'Preston', price:'$2400'}},
  //   {src:'v/v8.jpg',text: {brand:'Sebe', stylist:'Pisoio', price:'$9100'}},
  //   {src:'v/v9.jpg',text: {brand:'Chairoy', stylist:'Matthew', price:'$3400'}},
  //   {src:'v/v10.jpg',text: {brand:'Bussarat', stylist:'Krecey', price:'$5100'}},
  //   {src:'v/v11.jpg',text: {brand:'Bussarat', stylist:'Krecey', price:'$5100'}},
  //   {src:'v/v12.jpg',text: {brand:'Bizdam', stylist:'Preston', price:'$2400'}},
  //   {src:'v/v13.jpg',text: {brand:'Chairoy', stylist:'Matthew', price:'$3400'}},
  //   {src:'v/v14.jpg',text: {brand:'Sebe', stylist:'Pisoio', price:'$9100'}}
  // ];

  // text: {brand:'Chairoy', stylist:'Matthew', price:'$3400'} },
  //  text: { src: 'c/c2.jpg', text: {brand:'Bizdam', stylist:'Preston', price:'$2400'} },
  //   { src: 'c/c3.jpg', text: {brand:'Bussarat', stylist:'Krecey', price:'$5100'} },
  //   { src: 'c/c4.jpg', text: {brand:'Sebe', stylist:'Pisoio', price:'$9100'} },
  // ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [images,setImages]=useState([]);

  // const type='v';

   useEffect(() => {
    const fetchImages = async () => {
      try {
        // const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'your_cloud_name_here' });
        // const resources = await cloudinary.search.expression('h').execute();
        // const response = await axios.get(`http://localhost:3001/images/${type}`);
        // setImages(response.data);
        // console.log(vertical);
        // const updatedImages = vertical.map((image) => {
        // const parts = image.filename.split('-');
        // const brand = parts[2];
        // const price = parseInt(parts[3]);
        // const data = { brand, price };
        // return { ...image, data };
        // });
        setImages(vertical);
        console.log(updatedImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, [vertical]);


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div>
    {(images.length>0) && <div className='slider'>
    <img src={currentIndex === 0 ? images[images.length-1].url : images[currentIndex-1].url} alt="Slide" className="slider__image-b4" />
      <div className="slider__image">
         <button className="slider__button-left button" onClick={prevSlide}><FontAwesomeIcon icon={faLessThan}/></button>
         {/* <img src={images[currentIndex].url} alt="Slide"/>
         <div className='slider__image-text'>
              <p className='slider__image-text__brand'> {images[currentIndex].data.brand}</p>
              <p className='slider__image-text__price'>${images[currentIndex].data.price}</p>
              <button href='#' className='slider__image-text__more'>&gt; more</button>
         </div> */}
         <ProductCard product={images[currentIndex]} text={false} />
         <p>vertical products here</p>
         <button className="slider__button-right button" onClick={nextSlide}><FontAwesomeIcon icon={faGreaterThan}/></button>
      </div>
      <img src={currentIndex === images.length-1 ? images[0].url : images[currentIndex+1].url} alt={`${currentIndex}+1`} className="slider__image-af" />
    </div>}
    </div>
  );
};

export default ManualSlider;