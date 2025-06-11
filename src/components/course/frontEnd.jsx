import React, { useEffect } from 'react'
import image1 from '../../assets/course/Image16.png'
import Light from '../../assets/home/Light.png'

function frontEnd() {

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
    <div className=' h-64 items-center-safe ml-36 pl-2 justify-center grid grid-cols-2  w-[80%]'>
      <h1 className='text-5xl ml-20 font-bold'>Front-End Web Development</h1>
      <p>Welcome to our Front-End Web Development course! Become proficient in front-end web development. 
        Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. 
        Build interactive and responsive websites.</p>
    </div>

    <img src={image1} alt="Web Design Fundamentals" className='w-[80%] h-[50%] ml-36 mt-10 mb-10' />

    <div class="grid grid-cols-2 items-center-safe ml-36 justify-between w-[80%] min-h-screen p-4">
      <div class="bg-white rounded-xl shadow border p-6 w-full max-w-md ml-10 mb-10 mt-10">
        {/* <!-- Header --> */}
        <div class="flex justify-between items-start mb-4">
          <div>
            <h3 class="text-lg font-semibold mb-1">Introduction to HTML</h3>
          </div>
          <div class="text-3xl font-bold text-neutral-500">01</div>
        </div>

        {/* <!-- Lesson List --> */}
        <div class="space-y-3">
          {/* <!-- Lesson 1 --> */}
          <div class="bg-gray-50 border border-gray-200 hover:border-orange-400 hover:bg-orange-50 rounded-lg px-4 py-3">
            <p class="text-sm font-medium text-gray-700 mb-1">Understanding Web Design Principles</p>
            <div class="flex justify-between text-xs text-gray-500">
              <span>Lesson 01</span>
              <span class="flex items-center gap-1">
                🕒 <span>45 Minutes</span>
              </span>
            </div>
          </div>

          {/* <!-- Lesson 2 (Highlighted) --> */}
          <div class="bg-gray-50 border border-gray-200 hover:border-orange-400 hover:bg-orange-50 rounded-lg px-4 py-3">
            <p class="text-sm font-medium text-gray-700 mb-1">Importance of User-Centered Design</p>
            <div class="flex justify-between text-xs text-gray-500">
              <span>Lesson 02</span>
              <span class="flex items-center gap-1">
                🕒 <span>1 Hour</span>
              </span>
            </div>
          </div>

          {/* <!-- Lesson 3 --> */}
          <div class="bg-gray-50 border border-gray-200 hover:border-orange-400 hover:bg-orange-50 rounded-lg px-4 py-3">
            <p class="text-sm font-medium text-gray-700 mb-1">The Role of Web Design in Product Development</p>
            <div class="flex justify-between text-xs text-gray-500">
              <span>Lesson 03</span>
              <span class="flex items-center gap-1">
                🕒 <span>45 Minutes</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow border p-6 w-full max-w-md ml-10 mb-10 mt-10">
        {/* <!-- Header --> */}
        <div class="flex justify-between items-start mb-4">
          <div>
            <h3 class="text-lg font-semibold mb-1">Styling with CSS</h3>
          </div>
          <div class="text-3xl font-bold text-neutral-500">02</div>
        </div>

        {/* <!-- Lesson List --> */}
        <div class="space-y-3">
          {/* <!-- Lesson 1 --> */}
          <div class="bg-gray-50 border border-gray-200 hover:border-orange-400 hover:bg-orange-50 rounded-lg px-4 py-3">
            <p class="text-sm font-medium text-gray-700 mb-1">Conducting User Research and Interviews</p>
            <div class="flex justify-between text-xs text-gray-500">
              <span>Lesson 01</span>
              <span class="flex items-center gap-1">
                🕒 <span>1 Hour</span>
              </span>
            </div>
          </div>

          {/* <!-- Lesson 2 (Highlighted) --> */}
          <div class="bg-gray-50 border border-gray-200 hover:border-orange-400 hover:bg-orange-50 rounded-lg px-4 py-3">
            <p class="text-sm font-medium text-gray-700 mb-1">Analyzing User Needs and Behavior</p>
            <div class="flex justify-between text-xs text-gray-500">
              <span>Lesson 02</span>
              <span class="flex items-center gap-1">
                🕒 <span>1 Hour</span>
              </span>
            </div>
          </div>

          {/* <!-- Lesson 3 --> */}
          <div class="bg-gray-50 border border-gray-200 hover:border-orange-400 hover:bg-orange-50 rounded-lg px-4 py-3">
            <p class="text-sm font-medium text-gray-700 mb-1">Creating User Personas and Scenarios</p>
            <div class="flex justify-between text-xs text-gray-500">
              <span>Lesson 03</span>
              <span class="flex items-center gap-1">
                🕒 <span>45 Minutes</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow border p-6 w-full max-w-md ml-10 mb-10 mt-10">
        {/* <!-- Header --> */}
        <div class="flex justify-between items-start mb-4">
          <div>
            <h3 class="text-lg font-semibold mb-1">Introduction to Responsive Design</h3>
          </div>
          <div class="text-3xl font-bold text-neutral-500">03</div>
        </div>

        {/* <!-- Lesson List --> */}
        <div class="space-y-3">
          {/* <!-- Lesson 1 --> */}
          <div class="bg-gray-50 border border-gray-200 hover:border-orange-400 hover:bg-orange-50 rounded-lg px-4 py-3">
            <p class="text-sm font-medium text-gray-700 mb-1">Introduction to Wireframing Tools and Techniques</p>
            <div class="flex justify-between text-xs text-gray-500">
              <span>Lesson 01</span>
              <span class="flex items-center gap-1">
                🕒 <span>1 Hour</span>
              </span>
            </div>
          </div>

          {/* <!-- Lesson 2 (Highlighted) --> */}
          <div class="bg-gray-50 border border-gray-200 hover:border-orange-400 hover:bg-orange-50 rounded-lg px-4 py-3">
            <p class="text-sm font-medium text-gray-700 mb-1">Creating Low-Fidelity Wireframes</p>
            <div class="flex justify-between text-xs text-gray-500">
              <span>Lesson 02</span>
              <span class="flex items-center gap-1">
                🕒 <span>1 Hour</span>
              </span>
            </div>
          </div>

          {/* <!-- Lesson 3 --> */}
          <div class="bg-gray-50 border border-gray-200 hover:border-orange-400 hover:bg-orange-50 rounded-lg px-4 py-3">
            <p class="text-sm font-medium text-gray-700 mb-1">Prototyping and Interactive Mockups</p>
            <div class="flex justify-between text-xs text-gray-500">
              <span>Lesson 03</span>
              <span class="flex items-center gap-1">
                🕒 <span>1 Hour</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow border p-6 w-full max-w-md ml-10 mb-10 mt-10">
        {/* <!-- Header --> */}
        <div class="flex justify-between items-start mb-4">
          <div>
            <h3 class="text-lg font-semibold mb-1">Design Principles for Web</h3>
          </div>
          <div class="text-3xl font-bold text-neutral-500">04</div>
        </div>

        {/* <!-- Lesson List --> */}
        <div class="space-y-3">
          {/* <!-- Lesson 1 --> */}
          <div class="bg-gray-50 border border-gray-200 hover:border-orange-400 hover:bg-orange-50 rounded-lg px-4 py-3">
            <p class="text-sm font-medium text-gray-700 mb-1">Color Theory and Typography in UI Design</p>
            <div class="flex justify-between text-xs text-gray-500">
              <span>Lesson 01</span>
              <span class="flex items-center gap-1">
                🕒 <span>1 Hour</span>
              </span>
            </div>
          </div>

          {/* <!-- Lesson 2 (Highlighted) --> */}
          <div class="bg-gray-50 border border-gray-200 hover:border-orange-400 hover:bg-orange-50 rounded-lg px-4 py-3">
            <p class="text-sm font-medium text-gray-700 mb-1">Visual Hierarchy and Layout Design</p>
            <div class="flex justify-between text-xs text-gray-500">
              <span>Lesson 02</span>
              <span class="flex items-center gap-1">
                🕒 <span>1 Hour</span>
              </span>
            </div>
          </div>

          {/* <!-- Lesson 3 --> */}
          <div class="bg-gray-50 border border-gray-200 hover:border-orange-400 hover:bg-orange-50 rounded-lg px-4 py-3">
            <p class="text-sm font-medium text-gray-700 mb-1">Creating a Strong Brand Identity</p>
            <div class="flex justify-between text-xs text-gray-500">
              <span>Lesson 03</span>
              <span class="flex items-center gap-1">
                🕒 <span>45 Minutes</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow border p-6 w-full max-w-md ml-10 mb-10 mt-10">
        {/* <!-- Header --> */}
        <div class="flex justify-between items-start mb-4">
          <div>
            <h3 class="text-lg font-semibold mb-1">Building a Basic Website</h3>
          </div>
          <div class="text-3xl font-bold text-neutral-500">05</div>
        </div>

        {/* <!-- Lesson List --> */}
        <div class="space-y-3">
          {/* <!-- Lesson 1 --> */}
          <div class="bg-gray-50 border border-gray-200 hover:border-orange-400 hover:bg-orange-50 rounded-lg px-4 py-3">
            <p class="text-sm font-medium text-gray-700 mb-1">Usability Testing Methods and Techniques</p>
            <div class="flex justify-between text-xs text-gray-500">
              <span>Lesson 01</span>
              <span class="flex items-center gap-1">
                🕒 <span>1 Hour</span>
              </span>
            </div>
          </div>

          {/* <!-- Lesson 2 (Highlighted) --> */}
          <div class="bg-gray-50 border border-gray-200 hover:border-orange-400 hover:bg-orange-50 rounded-lg px-4 py-3">
            <p class="text-sm font-medium text-gray-700 mb-1">Analyzing Usability Test Results</p>
            <div class="flex justify-between text-xs text-gray-500">
              <span>Lesson 02</span>
              <span class="flex items-center gap-1">
                🕒 <span>45 Minutes</span>
              </span>
            </div>
          </div>

          {/* <!-- Lesson 3 --> */}
          <div class="bg-gray-50 border border-gray-200 hover:border-orange-400 hover:bg-orange-50 rounded-lg px-4 py-3">
            <p class="text-sm font-medium text-gray-700 mb-1">Iterating and Improving UX Designs</p>
            <div class="flex justify-between text-xs text-gray-500">
              <span>Lesson 03</span>
              <span class="flex items-center gap-1">
                🕒 <span>45 Minutes</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      
    </div>

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
    </>
  )
}

export default frontEnd