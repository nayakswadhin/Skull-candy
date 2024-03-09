import React from 'react'
import { FaGlobeEurope } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
// import { FaPlus } from "react-icons/fa6";
// import { FaMinus } from "react-icons/fa";
import Sidebar from './Sidebar';
import { useState } from 'react';
// import { SiD } from 'react-icons/si';
const Navbar = () => {
  const [show, setShow] = useState(false);
  const onshophover = () => {
    setShow(!show);
  }
  const [bar, setBar] = useState(false);
  const barchange = () => {
    setBar(!bar);
  }
  const closesidebar = () => {
    setBar(!bar);
  }
  return (
    <div>
        {bar && <Sidebar/>}
    <div className='mainnav'>
    <div className="nav">
        <div className='nav-item1'>
            <div className='nav-item11'>
            <img src="https://i.pinimg.com/originals/a2/4e/d1/a24ed1a9e230248c45b8c30df1319732.jpg" alt="logo" />
            <ul className='left-item'>
                <li className='shop' onMouseEnter={onshophover
                } onMouseLeave={onshophover}>SHOP
                </li>
                <li className="propicks">PRO PICKS</li>
                <li className="insideskullcandy">INSIDE SKULLCANDY</li>
            </ul>
            </div>
        </div>
        
        <div className='nav-item2'>
            <p className='support'>SUPPORT</p>
            <span className='common'><FaGlobeEurope /></span>
            <span className='common'><CiUser /></span>
            <span className='common'> <CiSearch /></span>
            <span className='common'> <CiShoppingCart /></span>
        </div>
    </div>
    </div>
    <div className='mainnavsized'>
    <div className="nav-sized" onClick={closesidebar}>
      <span onClick={barchange}>
      <FaBars/>
      </span>
      <img src="https://i.pinimg.com/originals/a2/4e/d1/a24ed1a9e230248c45b8c30df1319732.jpg" alt="logo" />
      <CiShoppingCart size={20}/>
      </div>
    </div>





{/* this shophover needs to be showed when hovered in shop text present in navigation */}
    {show && <div className='shophover'>
        <div className='shophover1'>
            <ul className='shophover11'>
              <li>New Arrivals</li>
              <li>Limited Editions</li>
              <li>Skull-iQ Products</li>
              <li className='sale'>Sale</li>
            </ul>
            <div className='shophover12'>
              <div>
                <h1>HeadPhones</h1>
                <p>Shop All Headphones</p>
              </div>
              <div>
              <h1>Earbuds</h1>
                <p>Shop All Earbuds</p>
              </div>
              <div>
              <h1>Speakers</h1>
                <p>Shop All Speakers</p>
              </div>
              <div>
              <h1>Gaming</h1>
                <p>Shop All Gaming</p>
              </div>
              <div>
              <h1>Accessories</h1>
                <p>Shop All Accessories</p>
              </div>
            </div>
        </div>
    </div>}
    {/*  */}
    </div>
  )
}

export default Navbar