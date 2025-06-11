import React from 'react'
import image1 from '../assets/course/Image1.png'
import image2 from '../assets/course/Image2.png'
import image3 from '../assets/course/Image3.png'
import image4 from '../assets/course/Image4.png'
import image5 from '../assets/course/Image5.png'
import image6 from '../assets/course/Image6.png'
import image7 from '../assets/course/Image7.png'
import image11 from '../assets/course/Image11.png'
import image12 from '../assets/course/Image12.png'
import image13 from '../assets/course/Image13.png'
import image14 from '../assets/course/Image14.png'
import image15 from '../assets/course/Image15.png'
import image16 from '../assets/course/Image16.png'
import image17 from '../assets/course/Image17.png'
import image18 from '../assets/course/Image18.png'
import Light from '../assets/home/light.png'
import { Link } from 'react-router-dom'

function course() {
  return (
    <div>
      <div className=' h-64 items-center-safe ml-36 pl-2 justify-center grid grid-cols-2  w-[80%]'>
        <h1 className='text-5xl ml-20 font-bold'>Online Courses on Designing and
          <br /> Development</h1>
        <p>Welcome to our online course page, where you can enhance your skills in design and 
          development. Choose from our carefully curated selection of 10 courses designed to 
          provide you with comprehensive knowledge and practical experience. Explore the 
          courses below and find the perfect fit for your learning journey.</p>
      </div>
      <section>

        {/*---------------------------------------------- section-->1------------------------------------------- */}
        
        <div class="max-w-6xl mt-5 mb-12 mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-2xl shadow-gray-800">

          {/* <!-- Top Section --> */}
          <div class="flex justify-between items-start mb-24 flex-wrap gap-4">
            <div>
              <h2 class="text-xl text-left pl-7 font-semibold mb-2">Web Design Fundamentals</h2>
              <p class="text-sm text-gray-600 max-w-xl">
                Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. 
                Develop the skills to create visually appealing and user-friendly websites.
              </p>
            </div>
            <button class="border border-gray-300 px-4 py-2 text-sm rounded hover:bg-gray-100 transition">
            <Link to='/courses/web-design-fundamentals' class="text-gray-700 hover:text-orange-500">
              View Course
            </Link>
            </button>
          </div>

          {/* <!-- Image Gallery --> */}
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-20">
            <div class="bg-gray-200 rounded-xl h-48 flex items-center justify-center text-gray-400">
              <img src={image1} alt="" />
            </div>
            <div class="bg-gray-200 rounded-xl h-48 flex items-center justify-center text-gray-400">
              <img src={image2} alt="" />
            </div>
            <div class="bg-gray-200 rounded-xl h-48 flex items-center justify-center text-gray-400">
              <img src={image3} alt="" />
            </div>
          </div>

          {/* <!-- Info Row --> */}
          <div class="flex items-center justify-between text-sm mb-6 flex-wrap gap-2">
            <div class="flex gap-2">
              <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">4 Weeks</span>
              <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Beginner</span>
            </div>
            <p class="text-sm text-gray-600">By John Smith</p>
          </div>

          {/* <!-- Curriculum Section --> */}
          <div class="bg-gray-50 border rounded-lg overflow-hidden">
            <div class="p-4 border-b">
              <h3 class="font-semibold">Curriculum</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-5 text-center text-sm divide-x">
              <div class="p-4">
                <p class="text-4xl font-bold mb-1">01</p>
                <p>Introduction to HTML</p>
              </div>
              <div class="p-4">
                <p class="text-4xl font-bold mb-1">02</p>
                <p>Styling with CSS</p>
              </div>
              <div class="p-4">
                <p class="text-4xl font-bold mb-1">03</p>
                <p>Introduction to Responsive Design</p>
              </div>
              <div class="p-4">
                <p class="text-4xl font-bold mb-1">04</p>
                <p>Design Principles for Web</p>
              </div>
              <div class="p-4">
                <p class="text-4xl font-bold mb-1">05</p>
                <p>Building a Basic Website</p>
              </div>
            </div>
          </div>
        </div>


        {/*---------------------------------------------- section-->2------------------------------------------- */}
        <div class="max-w-6xl mt-5 mb-12 mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-2xl shadow-gray-800">

          {/* <!-- Top Section --> */}
          <div class="flex justify-between items-start mb-24 flex-wrap gap-4">
            <div>
              <h2 class="text-xl text-left pl-7 font-semibold mb-2">UI/UX Design</h2>
              <p class="text-sm text-gray-600 max-w-xl">
                Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). 
                Learn design principles, wireframing, prototyping, and usability testing techniques.
              </p>
            </div>
            <button class="border border-gray-300 px-4 py-2 text-sm rounded hover:bg-gray-100 transition">
            <Link to='/courses/ui-ux-design' class="text-gray-700 hover:text-orange-500">
              View Course
            </Link>
            </button>
          </div>

          {/* <!-- Image Gallery --> */}
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-20">
            <div class="bg-gray-200 rounded-xl h-48 flex items-center justify-center text-gray-400">
              <img src={image4} alt="" />
            </div>
            <div class="bg-gray-200 rounded-xl h-48 flex items-center justify-center text-gray-400">
              <img src={image5} alt="" />
            </div>
            <div class="bg-gray-200 rounded-xl h-48 flex items-center justify-center text-gray-400">
              <img src={image6} alt="" />
            </div>
          </div>

          {/* <!-- Info Row --> */}
          <div class="flex items-center justify-between text-sm mb-6 flex-wrap gap-2">
            <div class="flex gap-2">
              <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">6 Weeks</span>
              <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Intermediate</span>
            </div>
            <p class="text-sm text-gray-600">By Emily Johnson</p>
          </div>

          {/* <!-- Curriculum Section --> */}
          <div class="bg-gray-50 border rounded-lg overflow-hidden">
            <div class="p-4 border-b">
              <h3 class="font-semibold">Curriculum</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-5 text-center text-sm divide-x">
              <div class="p-4">
                <p class="text-4xl font-bold mb-1">01</p>
                <p>Introduction to UI/UX Design</p>
              </div>
              <div class="p-4">
                <p class="text-4xl font-bold mb-1">02</p>
                <p>User Research and Personas</p>
              </div>
              <div class="p-4">
                <p class="text-4xl font-bold mb-1">03</p>
                <p>Wireframing and Prototyping</p>
              </div>
              <div class="p-4">
                <p class="text-4xl font-bold mb-1">04</p>
                <p>Visual Design and Branding</p>
              </div>
              <div class="p-4">
                <p class="text-4xl font-bold mb-1">05</p>
                <p>Usability Testing and Iteration</p>
              </div>
            </div>
          </div>
        </div>

        {/*---------------------------------------------- section-->3------------------------------------------- */}
        <div class="max-w-6xl mt-5 mb-12 mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-2xl shadow-gray-800">

          {/* <!-- Top Section --> */}
          <div class="flex justify-between items-start mb-24 flex-wrap gap-4">
            <div>
              <h2 class="text-xl text-left pl-7 font-semibold mb-2">Mobile App Development</h2>
              <p class="text-sm text-gray-600 max-w-xl">
                Dive into the world of mobile app development. 
                Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.
              </p>
            </div>
            <button class="border border-gray-300 px-4 py-2 text-sm rounded hover:bg-gray-100 transition">
            <Link to='/courses/mobile-app-development' class="text-gray-700 hover:text-orange-500">
              View Course
            </Link>
            </button>
          </div>

          {/* <!-- Image Gallery --> */}
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-20">
            <div class="bg-gray-200 rounded-xl h-48 flex items-center justify-center text-gray-400">
              <img src={image7} alt="" />
            </div>
            <div class="bg-gray-200 rounded-xl h-48 flex items-center justify-center text-gray-400">
              <img src={image11} alt="" />
            </div>
            <div class="bg-gray-200 rounded-xl h-48 flex items-center justify-center text-gray-400">
              <img src={image12} alt="" />
            </div>
          </div>

          {/* <!-- Info Row --> */}
          <div class="flex items-center justify-between text-sm mb-6 flex-wrap gap-2">
            <div class="flex gap-2">
              <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">8 Weeks</span>
              <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Intermediate</span>
            </div>
            <p class="text-sm text-gray-600">By David Brown</p>
          </div>

          {/* <!-- Curriculum Section --> */}
          <div class="bg-gray-50 border rounded-lg overflow-hidden">
            <div class="p-4 border-b">
              <h3 class="font-semibold">Curriculum</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-5 text-center text-sm divide-x">
              <div class="p-4">
                <p class="text-4xl font-bold mb-1">01</p>
                <p>Introduction to Mobile App Development</p>
              </div>
              <div class="p-4">
                <p class="text-4xl font-bold mb-1">02</p>
                <p>Fundamentals of Swift Programming (iOS)</p>
              </div>
              <div class="p-4">
                <p class="text-4xl font-bold mb-1">03</p>
                <p>Fundamentals of Kotlin Programming (Android)</p>
              </div>
              <div class="p-4">
                <p class="text-4xl font-bold mb-1">04</p>
                <p>Building User Interfaces</p>
              </div>
              <div class="p-4">
                <p class="text-4xl font-bold mb-1">05</p>
                <p>App Deployment and Testing</p>
              </div>
            </div>
          </div>
        </div>

        {/*---------------------------------------------- section-->4------------------------------------------- */}
        <div class="max-w-6xl mt-5 mb-12 mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-2xl shadow-gray-800">

          {/* <!-- Top Section --> */}
          <div class="flex justify-between items-start mb-24 flex-wrap gap-4">
            <div>
              <h2 class="text-xl text-left pl-7 font-semibold mb-2">Graphic Design for Beginners</h2>
              <p class="text-sm text-gray-600 max-w-xl">
                Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. 
                Create visually stunning designs for print and digital media.
              </p>
            </div>
            <button class="border border-gray-300 px-4 py-2 text-sm rounded hover:bg-gray-100 transition">
            <Link to='/courses/graphic-design-for-beginners' class="text-gray-700 hover:text-orange-500">
              View Course
            </Link>
            </button>
          </div>

          {/* <!-- Image Gallery --> */}
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-20">
            <div class="bg-gray-200 rounded-xl h-48 flex items-center justify-center text-gray-400">
              <img src={image13} alt="" />
            </div>
            <div class="bg-gray-200 rounded-xl h-48 flex items-center justify-center text-gray-400">
              <img src={image14} alt="" />
            </div>
            <div class="bg-gray-200 rounded-xl h-48 flex items-center justify-center text-gray-400">
              <img src={image15} alt="" />
            </div>
          </div>

          {/* <!-- Info Row --> */}
          <div class="flex items-center justify-between text-sm mb-6 flex-wrap gap-2">
            <div class="flex gap-2">
              <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">10 Weeks</span>
              <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Beginner</span>
            </div>
            <p class="text-sm text-gray-600">By Sarah Thompson</p>
          </div>

          {/* <!-- Curriculum Section --> */}
          <div class="bg-gray-50 border rounded-lg overflow-hidden">
            <div class="p-4 border-b">
              <h3 class="font-semibold">Curriculum</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-5 text-center text-sm divide-x">
              <div class="p-4">
                <p class="text-4xl font-bold mb-1">01</p>
                <p>Introduction to Graphic Design</p>
              </div>
              <div class="p-4">
                <p class="text-4xl font-bold mb-1">02</p>
                <p>Typography and Color Theory</p>
              </div>
              <div class="p-4">
                <p class="text-4xl font-bold mb-1">03</p>
                <p>Layout Design and Composition</p>
              </div>
              <div class="p-4">
                <p class="text-4xl font-bold mb-1">04</p>
                <p>Image Editing and Manipulation</p>
              </div>
              <div class="p-4">
                <p class="text-4xl font-bold mb-1">05</p>
                <p>Designing for Print and Digital Media</p>
              </div>
            </div>
          </div>
        </div>

        {/*---------------------------------------------- section-->5------------------------------------------- */}
        <div class="max-w-6xl mt-5 mb-20 mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-2xl shadow-gray-800">

          {/* <!-- Top Section --> */}
          <div class="flex justify-between items-start mb-24 flex-wrap gap-4">
            <div>
              <h2 class="text-xl text-left pl-7 font-semibold mb-2">Front-End Web Development</h2>
              <p class="text-sm text-gray-600 max-w-xl">
                Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. 
                Build interactive and responsive websites.
              </p>
            </div>
            <button class="border border-gray-300 px-4 py-2 text-sm rounded hover:bg-gray-100 transition">
            <Link to='/courses/front-end-web-development' class="text-gray-700 hover:text-orange-500">
              View Course
            </Link>
            </button>
          </div>

          {/* <!-- Image Gallery --> */}
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-20">
            <div class="bg-gray-200 rounded-xl h-48 flex items-center justify-center text-gray-400">
              <img src={image16} alt="" />
            </div>
            <div class="bg-gray-200 rounded-xl h-48 flex items-center justify-center text-gray-400">
              <img src={image17} alt="" />
            </div>
            <div class="bg-gray-200 rounded-xl h-48 flex items-center justify-center text-gray-400">
              <img src={image18} alt="" />
            </div>
          </div>

          {/* <!-- Info Row --> */}
          <div class="flex items-center justify-between text-sm mb-6 flex-wrap gap-2">
            <div class="flex gap-2">
              <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">4 Weeks</span>
              <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Beginner</span>
            </div>
            <p class="text-sm text-gray-600">By Michael Adams</p>
          </div>

          {/* <!-- Curriculum Section --> */}
          <div class="bg-gray-50 border rounded-lg overflow-hidden">
            <div class="p-4 border-b">
              <h3 class="font-semibold">Curriculum</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-5 text-center text-sm divide-x">
              <div class="p-4">
                <p class="text-4xl font-bold mb-1">01</p>
                <p>Introduction to HTML</p>
              </div>
              <div class="p-4">
                <p class="text-4xl font-bold mb-1">02</p>
                <p>Styling with CSS</p>
              </div>
              <div class="p-4">
                <p class="text-4xl font-bold mb-1">03</p>
                <p>Introduction to Responsive Design</p>
              </div>
              <div class="p-4">
                <p class="text-4xl font-bold mb-1">04</p>
                <p>Design Principles for Web</p>
              </div>
              <div class="p-4">
                <p class="text-4xl font-bold mb-1">05</p>
                <p>Building a Basic Website</p>
              </div>
            </div>
          </div>
        </div>



      </section>


      {/* <!-- Footer --> */}
      <footer class="bg-white border-t mt-10">
          <div class="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-10 text-sm text-gray-800">

              {/* <!-- Logo & Contact --> */}
              <div class="space-y-4">
              <div class="w-14 h-10 rounded flex items-center justify-center text-white font-bold text-xl">
                  <img src={Light} alt="" />
                  {/* <!-- Replace with your SVG/logo --> */}
              </div>
              <div class="flex items-center gap-2">
                  <span>📧</span>
                  <span>nishit95luhadia1@gmail.com</span>
              </div>
              <div class="flex items-center gap-2">
                  <span>📞</span>
                  <span>+91 74018 86350</span>
              </div>
              <div class="flex items-center gap-2">
                  <span>📍</span>
                  <span>Udaipur (Raj.) - 313001</span>
              </div>
              </div>

              {/* <!-- Home Links --> */}
              <div>
              <h4 class="font-semibold mb-4">Home</h4>
              <ul class="space-y-2">
                  <li><a href="#" class="hover:text-orange-500">Benefits</a></li>
                  <li><a href="#" class="hover:text-orange-500">Our Courses</a></li>
                  <li><a href="#" class="hover:text-orange-500">Our Testimonials</a></li>
                  <li><a href="#" class="hover:text-orange-500">Our FAQ</a></li>
              </ul>
              </div>

              {/* <!-- About Us Links --> */}
              <div>
              <h4 class="font-semibold mb-4">About Us</h4>
              <ul class="space-y-2">
                  <li><a href="#" class="hover:text-orange-500">Company</a></li>
                  <li><a href="#" class="hover:text-orange-500">Achievements</a></li>
                  <li><a href="#" class="hover:text-orange-500">Our Goals</a></li>
              </ul>
              </div>

              {/* <!-- Social Profiles --> */}
              <div>
              <h4 class="font-semibold mb-4">Social Profiles</h4>
              <div class="flex gap-3">
                  <a href="#" class="p-2 bg-gray-100 rounded hover:bg-orange-100">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" alt="Facebook" class="w-5 h-5" />
                  </a>
                  <a href="#" class="p-2 bg-gray-100 rounded hover:bg-orange-100">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/twitter.svg" alt="Twitter" class="w-5 h-5" />
                  </a>
                  <a href="#" class="p-2 bg-gray-100 rounded hover:bg-orange-100">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" alt="LinkedIn" class="w-5 h-5" />
                  </a>
              </div>
              </div>
          </div>

          {/* <!-- Bottom Note --> */}
          <div class="text-center text-gray-500 text-xs py-4 border-t">
              © 2025 Nishit-Luhadia. All rights reserved.
          </div>
          </footer>
    </div>

    
  )
}

export default course