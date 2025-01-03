import React, { useRef, useState } from 'react'
import './Navbar.css'
import AnchorLink from "react-anchor-link-smooth-scroll";

// import underline from '../../assets/nav_underline.svg'
// import logo from '../../assets/logo.svg'

const Navbar = () => {
  const [menu,setMenu]=useState("about");
  const menuRef = useRef();
  const openMenu = ()=>{
    menuRef.current.style.right="0px"
  }
  const closeMenu = ()=>{
    menuRef.current.style.right="-350px"
  }
  return (
    <div className='navbar'>
        <img src="logo.svg" alt="" />
        <img src="menu_open.svg" onClick={openMenu} alt="" className='nav-mob-open'/>
        <ul ref={menuRef} className='nav-menu'>
          <img src="menu_close.svg" onClick={closeMenu} alt="" className="nav-mob-close" />
            <li> <AnchorLink className="anchor-link" href="#home"><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src="/nav_underline.svg" alt="Underline"/>:<></>}</li>
            <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src="/nav_underline.svg" alt=''/>:<></>}</li>
            <li><AnchorLink className="anchor-link" offset={50} href="#services"><p onClick={()=>setMenu("Services")}>Services</p></AnchorLink>{menu==="Services"?<img src="/nav_underline.svg" alt=''/>:<></>}</li>
            <li><AnchorLink className="anchor-link" offset={50} href="#work"><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<img src="/nav_underline.svg" alt=''/>:<></>}</li>
            <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src="/nav_underline.svg" alt=''/>:<></>}</li>
        </ul>
        <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
      
    </div>
  )
}

export default Navbar
