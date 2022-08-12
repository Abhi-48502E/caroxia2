import React from 'react'
import './contacts.css'
import { Outlet, Link } from "react-router-dom";


function Contacts() {
  return (
    <div className='main-contacts'>
    <div id="dark-theme" class='flex w-full p-0 sm:p-8 body'>
    <div class='flex flex-col items-center w-full gap-4 p-2 m-auto sm:p-4 md:w-8/12 lg:w-8/12 xl:w-6/12 rounded-xl form'>
      <p class='text-5xl'>Contact US</p>
      <p class='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod a repudiandae rem consectetur nemo mollitia at harum saepe error officiis? </p>
      <form class='flex flex-col w-full gap-4 '>
        <div>
          <span class='flex flex-col justify-between xl:flex-row '>
            <div class='flex flex-col'>
              <label class='p-1' for="First name">First name</label>
              <input class='px-4 py-3 text-lg transition-all duration-300 rounded-lg focus:outline-none focus:right-1 ' name="First name" id="First name" placeholder="First name" type="text" />
            </div>
            <div class='flex flex-col'>
              <label class='p-1' for="Last name">Last name</label>
              <input class='px-4 py-3 text-lg transition-all duration-300 rounded-lg focus:outline-none focus:right-1 ' name="Last name" id="Last name" placeholder="Last name" type="text" />
            </div>
          </span>
        </div>
        <div class='flex flex-col'>
          <label class='p-1' for="City">City</label>
              <input class='px-4 py-3 text-lg transition-all duration-300 rounded-lg focus:outline-none focus:right-1 ' name="City" id="City" placeholder="City" type="text" />
        </div>
        <div class='flex flex-col'>
          <label class='p-1' for="State">State</label>
              <input class='px-4 py-3 text-lg transition-all duration-300 rounded-lg focus:outline-none focus:right-1 ' name="State" id="State" placeholder="State" type="text" />
        </div>
        <div class='flex flex-col'>
          <label class='p-1' for="Email">Email</label>
              <input class='px-4 py-3 text-lg transition-all duration-300 rounded-lg focus:outline-none focus:right-1 ' name="Email" id="Email" placeholder="Email" type="email" />
        </div>
        <div class='flex flex-col'>
          <label class='p-1' for="Phone Number">Phone Number</label>
              <input class='px-4 py-3 text-lg transition-all duration-300 rounded-lg focus:outline-none focus:right-1 ' name="Phone Number" id="Phone Number" placeholder="Phone Number" type="number" />
        </div>
        <div class='flex flex-col'>
          <label class='p-1' for="Message">Message</label>
          <textarea class='px-4 py-3 text-lg transition-all duration-300 rounded-lg focus:outline-none focus:right-1 ' name="Message" id="Message" placeholder="Your Message Here" type="text" >
            Message
          </textarea>
        </div>
        <div class='flex items-center w-full gap-4'>
          <div onclick="toggle()" class="p-1 mr-0 bg-gray-400 track ">
            <div class="z-10 bg-red-400 thumb" ></div>
          </div>
          <p>By Selecting this, You are agree to the
            <Link class='underline' to=""> Privacy Policy </Link>
            and
            <Link class='underline' to=""> Cookie Policy </Link>
          </p>
        </div>
        <button class='px-6 py-4 font-semibold bg-purple-500 rounded-lg'>Let's talk</button>
      </form>
    </div>
  </div>
    </div>
  )
}

export default Contacts