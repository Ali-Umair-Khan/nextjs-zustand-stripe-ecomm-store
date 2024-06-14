/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState,useEffect } from 'react';
import './categories.scss'; // Import your CSS file for styling
import axios from 'axios';
const Categories = ({categories}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  // const images = [
  //   { src: 'c/c1.jpg', text: {brand:'Chairoy', stylist:'Matthew', price:'$3400'} },
  //   { src: 'c/c2.jpg', text: {brand:'Bizdam', stylist:'Preston', price:'$2400'} },
  //   { src: 'c/c3.jpg', text: {brand:'Bussarat', stylist:'Krecey', price:'$5100'} },
  //   { src: 'c/c4.jpg', text: {brand:'Sebe', stylist:'Pisoio', price:'$9100'} },
  // ];

  const [images,setImages]=useState([]);

  // const type='cat';

   useEffect(() => {
    const fetchImages = async () => {
      try {
        // const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'your_cloud_name_here' });
        // const resources = await cloudinary.search.expression('h').execute();
        // const response = await axios.get(`http://localhost:3001/images/${type}`);
        // setImages(response.data);
        const updatedImages = categories.map((image) => {
        const parts = image.filename.split('-');
        const brand = parts[2];
        const price = parseInt(parts[3]);
        const data = { brand, price };
        return { ...image, data };
        });
        setImages(updatedImages);
        console.log(updatedImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, [categories]);


  

  return (
    <div className="container">
      {images.map((image, index) => (
        <div
          key={index}
          className="image-container"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={image.url}
            alt={image.filename}
            className={hoveredIndex === index ? 'enlarged' : ''}
          />
          {hoveredIndex === index && <div className="text">
          <p className='text__brand'> {image.data.brand}</p>
          <p className='text__price'>{image.data.price}</p>
          <button href='#' className='text__more'>&gt; more</button>
          </div>
          }
        </div>
      ))}
    </div>
  );
};

export default Categories;