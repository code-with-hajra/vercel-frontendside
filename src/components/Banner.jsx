import React from 'react'
import banner from '../assets/banner.png'

function Banner() {
  return (
    <>
      <div className='mt-10 max-w-screen-2xl container mx-auto md:px-20 px:4 flex flex-col md:flex-row'>
        <div className='order-2 md:order-1 w-full md:w-1/2 mt-11 md:mt-25 font-bold'>
          <div className='space-y-6'>
            <h1 className='text-2xl '><span className='text-green-500'>Learn for free, grow for life</span> — check out our free book-based learning tools.</h1>
            <p className='text-xl font-medium'>Every great journey begins with a single page — find your next adventure here. Whether you're into stories, skills, or study, there's a book here just for you!
            </p>
            <label className="input validator border border-gray-300 rounded-md px-2 py-1 focus-within:border-none">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                placeholder="mail@site.com"
                required
                className=""
              />
            </label>


            <div className="validator-hint hidden grow outline-none border ">Enter valid email address</div>
          </div>
<button className="btn btn-success">Success</button>

        </div>
        <div className='order-1 w-full md:w-1/2'>
          <img className='mt-10' src={banner}/>
        </div>

      </div>
    </>
  )
}

export default Banner