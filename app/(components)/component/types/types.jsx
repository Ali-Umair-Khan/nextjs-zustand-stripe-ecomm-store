/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState,useEffect } from 'react';
import './types.scss'; // Import your CSS file for styling
import axios from 'axios';
const Types = ({type}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  // const images = [
  //   { src: 'categories/cat1.jpg', text: {brand:'Chairoy', stylist:'Matthew', price:'$3400'},type:'chairs' },
  //   { src: 'categories/cat2.jpg', text: {brand:'Bizdam', stylist:'Preston', price:'$2400'},type:'bedroom sets' },
  //   { src: 'categories/cat3.jpg', text: {brand:'Bussarat', stylist:'Krecey', price:'$5100'},type:'sofa' },
  //   { src: 'categories/cat4.jpg', text: {brand:'Sebe', stylist:'Pisoio', price:'$9100'},type:'dinning table' },
  //   { src: 'categories/cat5.jpg', text: {brand:'Chairoy', stylist:'Matthew', price:'$3400'},type:'ottomans' },
  //   { src: 'categories/cat6.jpg', text: {brand:'Bizdam', stylist:'Preston', price:'$2400'},type:'shelves'},
  //   { src: 'categories/cat7.jpg', text: {brand:'Bussarat', stylist:'Krecey', price:'$5100'},type:'lounge chairs' },
  //   { src: 'categories/cat8.jpg', text: {brand:'Sebe', stylist:'Pisoio', price:'$9100'},type:'coffee table' },
  //   { src: 'categories/cat9.jpg', text: {brand:'Chairoy', stylist:'Matthew', price:'$3400'},type:'barstools' },
  //   { src: 'categories/cat10.jpg', text: {brand:'Bizdam', stylist:'Preston', price:'$2400'},type:'outdoor chairs' }
  // ];

  // const type='f';

  const [images,setImages]=useState([]);


   useEffect(() => {
    const fetchImages = async () => {
      try {
        // const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'your_cloud_name_here' });
        // const resources = await cloudinary.search.expression('h').execute();
        // const response = await axios.get(`http://localhost:3001/images/${type}`);
        // setImages(response.data);
        const updatedImages = type.map((image) => {
        const parts = image.filename.split('-');
        const type = parts[0];
        const brand = parts[2];
        const price = parseInt(parts[3]);
        const data1 = { type, brand, price };
        return { ...image, data1 };
        });
        setImages(updatedImages);
        console.log(updatedImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, [type]);


  

  return (
    <div className="types">
      {images.length>0 && images.map((image, index) => (
        <div
          key={index}
          className="types-container"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={image.url}
            alt={image.filename}
            // className={hoveredIndex === index ? 'enlarged' : ''}
          />
          {hoveredIndex === index && <div className="text">
          <p className='text__type'> {image.data1.type}</p>
          <button href='#' className='text__more'>&gt; more</button>
          </div>
          }
        </div>
      ))}
    </div>
  );
};

export default Types;