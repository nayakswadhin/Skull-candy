import React from 'react'
import { FaCcPaypal } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";

const Footer2 = () => {
  return (
    <div className='ftl1'>
        <div>

        </div>
        <div className='ftl11'>
            <p>© 2024 Skullcandy.eu All Rights Reserved</p>
        </div>
        <div className='ftl12'>
            <FaCcPaypal size={24}/>
            <FaCcMastercard size={24}/>
            <FaCcVisa size={24}/>
            <SiAmericanexpress size={24}/>
        </div>
    </div>
  )
}

export default Footer2