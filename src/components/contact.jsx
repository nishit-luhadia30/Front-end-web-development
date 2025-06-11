import React from 'react';
import Light from '../assets/home/Light.png';

function ContactSection() {
  return (
    <>
    <div className=' h-64 items-center-safe ml-36 pl-2 justify-center grid grid-cols-2  w-[80%]'>
      <h1 className='text-5xl ml-20 font-bold'>Contact Us and clear all your pain</h1>
      <p>Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to 
        cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing
        options for our services. Whether you're an individual looking to enhance your skills or 
        a business seeking professional development solutions, we have a plan that suits you. 
        Explore our pricing options below and choose the one that best fits your requirements.</p>
      </div>

    <div className="bg-gray-50 p-8 min-h-screen flex justify-center items-start">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Contact Form */}
        <form className="lg:col-span-2 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">First Name</label>
              <input type="text" placeholder="Enter First Name" className="w-full bg-gray-100 p-3 rounded-md outline-none" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Last Name</label>
              <input type="text" placeholder="Enter Last Name" className="w-full bg-gray-100 p-3 rounded-md outline-none" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input type="email" placeholder="Enter your Email" className="w-full bg-gray-100 p-3 rounded-md outline-none" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Phone</label>
              <input type="tel" placeholder="Enter Phone Number" className="w-full bg-gray-100 p-3 rounded-md outline-none" />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Subject</label>
            <input type="text" placeholder="Enter your Subject" className="w-full bg-gray-100 p-3 rounded-md outline-none" />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea rows="5" placeholder="Enter your Message here..." className="w-full bg-gray-100 p-3 rounded-md outline-none"></textarea>
          </div>

          <button type="submit" className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600">
            Send Your Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-md shadow-sm flex items-center gap-4">
            <span className="text-xl">✉️</span>
            <p>nishit95luhadia1@gmail.com</p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-sm flex items-center gap-4">
            <span className="text-xl">📞</span>
            <p>+91 74108 86350</p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-sm flex items-center gap-4">
            <span className="text-xl">📍</span>
            <p>Some Where in the World</p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-sm text-center">
            <div className="flex justify-center gap-4 mb-2">
              <span className="text-xl cursor-pointer">🌐</span>
              <span className="text-xl cursor-pointer">🐦</span>
              <span className="text-xl cursor-pointer">💼</span>
            </div>
            <p className="text-sm">Social Profiles</p>
          </div>
        </div>
      </div>
    </div>

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
    </>
  );
}

export default ContactSection;
