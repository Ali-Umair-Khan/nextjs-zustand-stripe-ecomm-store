'use client'
import {useInView} from 'framer-motion';

import React,{useRef} from 'react';
import './imageCarousel3.scss'; // Create a CSS file for styling if needed

const Carousel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  
  const images = [
    'v/v1.jpg',
    'v/v2.jpg',
    'v/v3.jpg',
    'v/v4.jpg',
    'v/v5.jpg',
    'v/v6.jpg',
    'v/v7.jpg',
    'v/v8.jpg',
    'v/v9.jpg',
    'v/v10.jpg',
    'v/v11.jpg',
    'v/v12.jpg',
    'v/v13.jpg',
    'v/v14.jpg',
  ];

  return (
    <div className='slider'
        ref={ref}
        style={{
        //   height: "100vh",
        background: isInView ? "black" : "darkgray",
        color: isInView ? 'black' : 'gray',
        transition: "10s background, 5s color",
        }}
    >
        <div className='slider__track'>
        {images.map((image, index) => (
          <div key={index} className='slider__track-slide'>
            <img
              src={`/${image}`}
              alt={`Image ${index + 1}`}
              className="carousel-image"
            />
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Carousel;




////
// 'use client'
// import {motion,useInView} from 'framer-motion';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faPlus,faMinus,faWindowMinimize,faBars
// } from "@fortawesome/free-solid-svg-icons";
// import {faqData} from './data';
// import {useState,useRef} from 'react';
// import './faq.scss'
// const FaqComponent = () =>{
//     const ref = useRef(null);
//     const isInView = useInView(ref);
//     const [faqs,setFaqs]=useState(faqData);
//     // console.log(faqs);
//     const faqQues = (i) => {
//             const updatedFaqs = [...faqData];
//             updatedFaqs[i].isOpen = !updatedFaqs[i].isOpen;
//             setFaqs(updatedFaqs);
//     }
//     return(
//         <div 
//           ref={ref}
//           style={{
//         //   height: "100vh",
//           background: isInView ? "white" : "blue",
//           color: isInView ? 'black' : 'gray',
//           transition: "10s background, 5s color",
//           }}
//           className='faq'
//         >
//         <h1 className='faq__h1'>Frequently asked questions</h1>
//             {faqs.map((f,i)=>(
//                 <div key={i} className='hero__faqs'>
//                     {/* <h1>{f.question}<span style={{fontSize:'2rem', padding:'0 1rem', margin:'1rem 1rem -2rem 1rem', display:'inlineBlock'}} onClick={(i)=>opener(i)}><FontAwesomeIcon icon={faPlus} /></span></h1> */}
//                     {/* {f.isOpen ? <h1>{f.answer}</h1> : ''} */}
//                     <div onClick={()=>faqQues(i)}>
//                         <h1 className='hero__faqs-question'>{f.question} </h1> 
//                         {/* {f.isOpen ? <span className='hero__faqs-span'><FontAwesomeIcon icon={faWindowMinimize}/></span> : <span className='hero__faqs-span'><FontAwesomeIcon icon={faBars}/></span>} */}
//                     </div>
//                     {f.isOpen && <h1 className='hero__faqs-answer' onClick={()=>faqQues(i)}>{f.answer}</h1>}
//                 </div>
//             ))
//         }
//         </div>
//     )
// }

// export default FaqComponent