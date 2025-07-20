import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';  // Import Cards component

import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function FreeBooks() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  // var filterData = list.filter((data) => data.category === "Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <div className='mt-10 max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div>
        <h1 className='text-2xl font-bold'>Free Courses</h1>
        <p>Walk through the lives of legends and key moments in history.
          Gain insight, wisdom, and perspective from the real stories that shaped our world.
        </p>
      </div>
      <div>
        <Slider {...settings}>
          {book.map((item) => (
            <Cards item={item} key={item.id} />  
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default FreeBooks;