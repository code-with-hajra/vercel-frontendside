import Cards from './Cards';
import list from '../../public/list.json'
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Course() {
    const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://vercel-backend-mu-flax.vercel.app/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

    return (
        <>

            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-30'>
                <div className='items-center justify-center text-center'>
                    <h1 className='text-2xl md:text-4xl'>
                        We're happy to have you <span className='text-green-500'>join us.</span>
                    </h1>
                    <p className='mt-7'>Explore a wide range of books across various categories designed to support your learning journey. Whether you're interested in academic textbooks, self-help guides, fiction, non-fiction, or skill-based learning materials, we have something for everyone. Each book is carefully selected to help you grow, stay informed, and develop both personally and professionally. Start exploring and find the perfect book that matches your interests and goals.</p>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
                    {
                        book.map((item) =>
                            <Cards key={item.id} item={item} />)

                    }
                </div>
            </div>
        </>
    );
}

export default Course;
