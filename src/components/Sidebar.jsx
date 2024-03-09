import React from 'react'
// import { FaGlobeEurope } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
// import { CiShoppingCart } from "react-icons/ci";
// import { FaBars } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
// import { FaMinus } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className="sidebar1">
        <p>SHOP</p>
       <FaPlus/>
    </div>
    <div className="sidebar1">
        <p>PRO PICKS</p>
    </div>
    <div className="sidebar1">
        <p>INSIDE SKULLCANDY</p>
       <FaPlus/>
    </div>
    <div className="sidebar1">
        <p>SUPPORT</p>
       <FaPlus/>
    </div>
    <div className="sidebar1">
        <p>LOCATION</p>
       <FaPlus/>
    </div>
    <div className='sidebar2'>
        <CiUser/>
        <p className='accountsidebar1'>Account</p>
    </div>
    <div className='sidebar2'>
        <CiSearch/>
        <p className='searchsidebar1'>Search</p>
    </div>
    </div>
  )
}

export default Sidebar