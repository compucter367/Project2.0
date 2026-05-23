import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa"
export default function Footer() {
  return (
    <footer className='bg-[#101010] '>
      <div className='flex gap-[521px] py-[100px] px-[112px] border-b-1 border-b-[#3B4155] w-full'>
        <div className='flex gap-[151px]'>
          <div>
            <p className='text-[18px] font-medium text-white mb-[30px]'>Services</p>
            <ul className='flex flex-col gap-[26px]'>
              <li className='text-[18px] font-medium text-[#A1A8B7] hover:text-[#1AAB7B] active:text-[#188C66]'>SMM</li>
              <li className='text-[18px] font-medium text-[#A1A8B7] hover:text-[#1AAB7B] active:text-[#188C66]'>Web development</li>
              <li className='text-[18px] font-medium text-[#A1A8B7] hover:text-[#1AAB7B] active:text-[#188C66]'>Mobile apps</li>
              <li className='text-[18px] font-medium text-[#A1A8B7] hover:text-[#1AAB7B] active:text-[#188C66]'>Branding</li>
              <li className='text-[18px] font-medium text-[#A1A8B7] hover:text-[#1AAB7B] active:text-[#188C66]'>Graphic design</li>
            </ul>
          </div>
          <div>
            <p className='text-[18px] font-medium text-white mb-[30px]'>Resources</p>
            <ul className='flex flex-col gap-[26px]'>
              <li className='text-[18px] font-medium text-[#A1A8B7] hover:text-[#1AAB7B] active:text-[#188C66]'>About us</li>
              <li className='text-[18px] font-medium text-[#A1A8B7] hover:text-[#1AAB7B] active:text-[#188C66]'>Showcase</li>
              <li className='text-[18px] font-medium text-[#A1A8B7] hover:text-[#1AAB7B] active:text-[#188C66]'>Blog</li>
            </ul>
          </div>
        </div>
        <div>
          <p className='text-[18px] font-medium text-white mb-[30px]'>Connect with us</p>
          <ul className='flex flex-col gap-[26px]'>
            <li className='text-[18px] font-medium text-[#A1A8B7] hover:text-[#1AAB7B] active:text-[#188C66]'>(239) 555-0108</li>
            <li className='text-[18px] font-medium text-[#A1A8B7] hover:text-[#1AAB7B] active:text-[#188C66]'>hello@pixer.com</li>
            <li className='text-[18px] font-medium text-[#A1A8B7] hover:text-[#1AAB7B] active:text-[#188C66]'>4140 Parker Rd. Allentown, New Mexico 31134</li>
            <li>
              <ul className='flex gap-[40px]'>
                <li className='text-[24px] text-white'><FaTwitter /></li>
                <li className='text-[24px] text-white'><FaFacebookF /></li>
                <li className='text-[24px] text-white'><FaLinkedinIn /></li>
                <li className='text-[24px] text-white'><FaInstagram /></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className='py-[50px] px-[112px] flex justify-between w-full'>
        <img src="" alt="" />
        <p className='text-white hover:text-[#1AAB7B] active:text-[#188C66] text-[18px] font-medium'>Copyright © 2022 Pixer</p>
      </div>
    </footer>
  )
}
