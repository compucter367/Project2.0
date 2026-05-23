import React from 'react'
import { CiPen } from "react-icons/ci";
import { FaRegFileCode, FaPencilRuler } from "react-icons/fa";
import { PiDropHalf } from "react-icons/pi";
export default function MainSections() {
  return (
    <div>
      <section className='bg-[#F2F4F6] py-[50px] px-[118px]'>
        <h2 className='text-[36px] font-semibold text-center mb-10'>How can we help you?</h2>
        <ul className='flex flex-wrap gap-8'>
          <li className='px-[30px] py-[30px] w-[384px] rounded-md border-2 border-[#E1E7ED] hover:bg-[#1AAB7B] hover:text-white'>
            <div className='w-full mb-[11px] flex justify-between'>
              <h3 className='text-[32px] font-semibold'>Web Designer</h3>
              <div className='p-[17px] rounded-[84px] bg-[#E1E7ED]'>
                <CiPen className='text-[#1AAB7B] text-[30px]' />
              </div>
            </div>
            <p className='font-normal text-[18px] mb-[23px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Ut enim ad minim veniam, quis </p>
            <a href="#" className='font-bold text-xl'>View  more</a>
          </li>
          <li className='px-[30px] py-[30px] w-[384px] rounded-md border-2 border-[#E1E7ED] hover:bg-[#1AAB7B] hover:text-white'>
            <div className='w-full mb-[11px] flex justify-between'>
              <h3 className='text-[32px] font-semibold'>SMM</h3>
              <div className='p-[17px] rounded-[84px] bg-[#E1E7ED]'>
                <FaRegFileCode className='text-[#1AAB7B] text-[30px]' />
              </div>
            </div>
            <p className='font-normal text-[18px] mb-[23px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Ut enim ad minim veniam, quis </p>
            <a href="#" className='font-bold text-xl'>View  more</a>
          </li>
          <li className='px-[30px] py-[30px] w-[384px] rounded-md border-2 border-[#E1E7ED] hover:bg-[#1AAB7B] hover:text-white'>
            <div className='w-full mb-[11px] flex justify-between'>
              <h3 className='text-[32px] font-semibold'>Branding</h3>
              <div className='p-[17px] rounded-[84px] bg-[#E1E7ED]'>
                <PiDropHalf className='text-[#1AAB7B] text-[30px]' />
              </div>
            </div>
            <p className='font-normal text-[18px] mb-[23px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Ut enim ad minim veniam, quis </p>
            <a href="#" className='font-bold text-xl'>View  more</a>
          </li>
          <li className='px-[30px] py-[30px] w-[384px] rounded-md border-2 border-[#E1E7ED] hover:bg-[#1AAB7B] hover:text-white'>
            <div className='w-full mb-[11px] flex justify-between'>
              <h3 className='text-[32px] font-semibold'>Developer</h3>
              <div className='p-[17px] rounded-[84px] bg-[#E1E7ED]'>
                <FaRegFileCode className='text-[#1AAB7B] text-[30px]' />
              </div>
            </div>
            <p className='font-normal text-[18px] mb-[23px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Ut enim ad minim veniam, quis </p>
            <a href="#" className='font-bold text-xl'>View  more</a>
          </li>
          <li className='px-[30px] py-[30px] w-[384px] rounded-md border-2 border-[#E1E7ED] hover:bg-[#1AAB7B] hover:text-white'>
            <div className='w-full mb-[11px] flex justify-between'>
              <h3 className='text-[32px] font-semibold'>Graphic design</h3>
              <div className='p-[17px] rounded-[84px] bg-[#E1E7ED]'>
                <FaPencilRuler className='text-[#1AAB7B] text-[30px]' />
              </div>
            </div>
            <p className='font-normal text-[18px] mb-[23px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Ut enim ad minim veniam, quis </p>
            <a href="#" className='font-bold text-xl'>View  more</a>
          </li>
        </ul>
      </section>
      <section className='pt-25 pb-[150px] px-[118px]'>
        <div className='w-[650px] mx-auto'>
          <h2 className='text-[36px] font-semibold text-center mb-4'>How do we work?</h2>
          <p className='font-normal text-[18px] text-center mb-22.5 text-[#636F87]'>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</p>
        </div>
        <ul className='flex flex-col gap-y-[100px] '>
          <li className='flex gap-[32px]'>
            <img src="" className='w-[488px] h-[390px]' alt="Let's clarify the requirements" />
            <div className='w-[488px]'>
              <h3 className='font-bold text-[40px] mb-[20px]'>Let's clarify the requirements</h3>
              <p className='text-[18px] font-normal text-[#636F87]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </li>
          <li className='flex gap-[32px]'>
            <div className='w-[488px]'>
              <h3 className='font-bold text-[40px] mb-[20px]'>Let's clarify the requirements</h3>
              <p className='text-[18px] font-normal text-[#636F87]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            <img src="" className='w-[488px] h-[390px]' alt="Let's clarify the requirements" />
          </li>
          <li className='flex gap-[32px]'>
            <img src="" className='w-[488px] h-[390px]' alt="Let's clarify the requirements" />
            <div className='w-[488px]'>
              <h3 className='font-bold text-[40px] mb-[20px]'>Let's clarify the requirements</h3>
              <p className='text-[18px] font-normal text-[#636F87]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  )
}
