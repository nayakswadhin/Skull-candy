import React from 'react'
import { FaAngleRight } from "react-icons/fa6";

const Layout3 = () => {
  return (
    <div className='layout3'>
        <img src="https://images.prismic.io/skullcandy/e98609c8-1804-465c-a4fb-147385167e40_P7_desktop-3.jpg?auto=compress,format" alt="" />
        <p className='lt31'>WELCOME TO THE</p>
        <p className='lt32'>WORKSHOP</p>
        <div className='lt33'>
        The mad scientist in the top secret Skullcandy Workshop are always cooking up something new.
        </div>
        <p className="lt34">
        Stop by to check out the latest and greatest.
        </p>
        <button className="ltbt3">
            CHECK IT OUT 
            <FaAngleRight/>
        </button>
    </div>
  )
}

export default Layout3