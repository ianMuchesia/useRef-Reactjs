import React, { useEffect, useRef, useState } from 'react'
import { image_1, image_2, image_3 } from '../assets'

const ImageJSON = [
    {
      name: 'image_1',
      image: image_1,
    },
    {
      name: 'image_2',
      image: image_2
    },
    {
      name: 'image_3',
      image: image_3,
    },
  ]




  
const Images = () => {


   const [ index , setIndex] = useState(0)

   useEffect(() => {
    const intervalID = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    }, 100000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  console.log(index);
  return (
    <div>
        
       

      <div className="">
        <img src={ImageJSON[index].image} alt="" />
      </div>
    </div>
  )
}

export default Images