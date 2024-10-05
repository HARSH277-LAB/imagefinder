import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <>
      <div className="container pb-5">

  <footer className="text-center text-lg-start" style={{backgroundColor: "#db6930"}}>
    <div className="container d-flex justify-content-evenly py-5">
      <button type="button" className="btn btn-lg btn-floating mx-2 " style={{backgroundColor: "#54456b"}}>
        <Link to={'https://www.linkedin.com/in/harsh-thakkar-754a25327'}><CiLinkedin className='text-light fs-1'/></Link>
      </button>
      <button type="button" className="btn btn-lg btn-floating mx-2 fs-2" style={{backgroundColor:" #54456b"}}>
        <Link to={'https://github.com/HARSH277-LAB/'}><FaGithub className='text-light fs-2'/></Link>
      </button>
      <button type="button" className="btn btn-lg btn-floating mx-2 fs-2" style={{backgroundColor: "#54456b"}}>
        <Link to={'mailto:hardeeprojects@gmail.com'}><SiGmail className='text-light fs-2'/></Link>

      </button>
    </div>
    <div className="text-center text-white p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
      DEVELOPED BY HARSH ARUNBHAI THAKKAR 
    </div>
  </footer>
  </div>
    </>
  )
}
