import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { AiOutlineFacebook } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className='footermain'>
    <div className='footer'>
      <div className='ft1'>
        <p>HEAR IT FIRST</p>
        <input type="text" placeholder='Email Address'/>
      </div>

      <div className='ft2'>
        <div className='ft21'>
          <p className='ftcommon'>Help Center</p>
          <p className='ftcommon'>Warranty</p>
          <p className='ftcommon'>Product Help</p>
          <p className='ftcommon'>Order Status</p>
        </div>
        <div className='ft22'>
          <p className='ftcommon'>Recycling Help</p>
        </div>
        <div className='ft23'>
          <p className='ftcommon'>About</p>
          <p className='ftcommon'>Carrers</p>
          <p className='ftcommon'>Contact Us</p>
        </div>
      </div>
      <div className='ft3'>
        <div>
          <p className='ft31'>FOLLOW US</p>
        </div>
        <div className='ft32'>
          <FaInstagram size={24}/>
          <FiYoutube size={24}/>
          <AiOutlineFacebook size={24}/>
          <CiTwitter size={24}/>
        </div>
      </div>
    </div>
    </div>



      <div className="footersized">
        <div className='footersized1'> 
            <h1>HEAR IT FIRST</h1>
            <input className='input1' type="text" placeholder='Email Address' />
        </div>
        <div className="footersized2">
         <div>
          <p>SUPPORT</p>
          <FaPlus/>
         </div>
         <div>
          <p>OFFER</p>
          <FaPlus/>
         </div>
         <div>
          <p>ABOUT US</p>
          <FaPlus/>
         </div>
        </div>
        <div className='footersized3'>
          <div className='footersized31'>
                <p>FOLLOW US</p>
          </div>
          <div className='footersized32'>
                <FaInstagram size={24}/>
                <FiYoutube size={24}/>
                <AiOutlineFacebook size={24}/>
                <CiTwitter size={24}/>
          </div>

        </div>
      </div>


    </div>
  )
}

export default Footer