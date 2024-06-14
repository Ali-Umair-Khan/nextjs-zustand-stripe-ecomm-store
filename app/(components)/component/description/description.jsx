/* eslint-disable @next/next/no-img-element */
'use client'
import {useState,useEffect} from 'react';
import axios from 'axios';
import './description.scss'
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

const Description = () => {

    // const images = [
    //     { src: 'd/d1.jpg', text: 'Labore labore labore aliqua deserunt laboris. Proident minim fugiat eu voluptate aliquip. Lorem officia cillum ut labore veniam. Enim enim commodo et veniam ad qui cillum fugiat enim consectetur magna. Do ex enim velit et culpa. Nisi culpa quis magna consequat ipsum officia dolore.' },
    //     { src: 'd/d2.jpg', text: 'Nostrud proident sunt ut ut tempor labore mollit occaecat amet Lorem labore. Ipsum laborum ipsum ullamco fugiat sit. Culpa ullamco irure culpa nostrud occaecat. Enim elit minim aliqua reprehenderit. Laboris proident aliquip ullamco occaecat sint aute anim labore velit excepteur eiusmod. Culpa est elit id sint. Laboris officia officia occaecat duis.' },
    //     { src: 'd/d3.jpg', text: 'Tempor est dolore consequat excepteur reprehenderit culpa adipisicing laborum minim ad. Pariatur deserunt duis incididunt eu anim duis. Exercitation sint pariatur aliqua aute aliqua cillum aute culpa proident quis.' },
    //     { src: 'd/d4.jpg', text: 'Ullamco enim quis duis commodo veniam commodo aliquip occaecat enim culpa ullamco consequat labore ipsum. Enim non nisi est consequat dolor occaecat ea eiusmod est. Mollit deserunt est non ea cillum nisi sint officia dolor officia labore. Id labore sit dolor minim dolore. Quis excepteur sit aliqua ipsum ullamco irure deserunt nulla adipisicing amet pariatur minim. Amet amet sit excepteur fugiat deserunt sint dolor cillum. Voluptate ea ullamco culpa ullamco sint occaecat culpa excepteur cillum.' },
    // ];

    const [images,setImages]=useState([]);

  const type='v';

   useEffect(() => {
    const fetchImages = async () => {
      try {
        // const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'your_cloud_name_here' });
        // const resources = await cloudinary.search.expression('h').execute();
        const response = await axios.get(`http://localhost:3001/images/${type}`);
        // setImages(response.data);
        const updatedImages = response.data.map((image) => {
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
  }, [type]);


  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };


  return (
    <div className='slider__main'>
    {images.length>0 && <div className='slider__main'>
    <div className='slider__main-text'>
        <h1>Et sit minim id proident ipsum.</h1>
        <p>Deserunt consectetur non ut amet aliquip consectetur ex in incididunt amet fugiat nisi cillum et. Aute veniam commodo nisi veniam. Exercitation quis ex aliqua incididunt consectetur eiusmod fugiat occaecat tempor nulla laboris aliqua cillum do. Quis pariatur sint exercitation et aliquip veniam esse veniam labore. Aute nisi ex eiusmod ullamco non est cupidatat id incididunt consectetur aliquip pariatur.</p>
        <button href='#'>BOOK YOUR FREE DISCOVERY CALL</button>
      </div>
      <div className="slider__main-image">
        <button className="slider__button-left button" onClick={prevSlide} aria-label="Previous Slide"><FontAwesomeIcon icon={faLessThan}/></button>
        <img src={images[currentIndex].url} alt={`Slide ${currentIndex + 1}`} onError={nextSlide} />
        <button className="slider__button-right button" onClick={nextSlide} aria-label="Next Slide"><FontAwesomeIcon icon={faGreaterThan}/></button>
      </div>
    </div>
    }
    </div>
  );
}

export default Description

// const Description = () => {
//   const images = [
//     { src: 'd/d1.jpg', text: '...' },
//     { src: 'd/d2.jpg', text: '...' },
//     { src: 'd/d3.jpg', text: '...' },
//     { src: 'd/d4.jpg', text: '...' },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

  
// };
