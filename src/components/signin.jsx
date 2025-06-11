import React from 'react';
import { Lock, BookOpen, Users, Sun, ArrowLeft, ArrowRight } from 'lucide-react';
import Light from '../assets/home/Light.png';

const goals = [
  {
    icon: <Lock className="text-orange-500 w-6 h-6" />,
    title: "Provide Practical Skills",
    description:
      "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.",
  },
  {
    icon: <BookOpen className="text-orange-500 w-6 h-6" />,
    title: "Foster Creative Problem-Solving",
    description:
      "We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.",
  },
  {
    icon: <Users className="text-orange-500 w-6 h-6" />,
    title: "Promote Collaboration and Community",
    description:
      "We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.",
  },
  {
    icon: <Sun className="text-orange-500 w-6 h-6" />,
    title: "Stay Ahead of the Curve",
    description:
      "The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.",
  },
];

const signin = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      

      {/* Testimonials & Login */}
      <section className="px-4 py-16 max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Testimonials */}
        <div>
          <h2 className="text-3xl font-bold">Students Testimonials</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
          </p>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <p className="text-gray-700 mb-4">
              The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="user"
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-semibold">Sarah L</span>
              </div>
              <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md">
                Read More
              </button>
            </div>
          </div>

          <div className="flex space-x-2 mt-4">
            <button className="bg-white p-2 rounded-md shadow-md">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button className="bg-white p-2 rounded-md shadow-md">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Login Form */}
        <div className="bg-white p-10 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-center mb-2">Login</h2>
          <p className="text-center text-gray-600 mb-8">
            Welcome back! Please log in to access your account.
          </p>

          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full p-3 mt-1 mb-4 border border-gray-200 rounded-md"
          />

          <label className="block text-sm font-medium">Password</label>
          <div className="relative">
            <input
              type="password"
              placeholder="Enter your Password"
              className="w-full p-3 mt-1 border border-gray-200 rounded-md"
            />
            <span className="absolute right-3 top-3 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 3C5 3 1.73 7.11 1.73 10s3.27 7 8.27 7 8.27-4.11 8.27-7-3.27-7-8.27-7zm0 12c-2.5 0-4.5-2.02-4.5-4.5S7.5 6 10 6s4.5 2.02 4.5 4.5S12.5 15 10 15z" />
              </svg>
            </span>
          </div>

          <div className="flex justify-between items-center mt-3">
            <label className="text-sm flex items-center space-x-2">
              <input type="checkbox" className="accent-orange-500" />
              <span>Remember Me</span>
            </label>
            <a href="#" className="text-sm text-orange-500 font-medium">
              Forgot Password?
            </a>
          </div>

          <button className="bg-orange-500 text-white font-medium w-full mt-6 py-3 rounded-md hover:bg-orange-600">
            Login
          </button>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-3 text-gray-400 text-sm">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <button className="w-full flex items-center justify-center bg-gray-100 py-3 rounded-md">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="google" className="w-5 h-5 mr-2" />
            <span className="text-gray-700 font-medium">Login with Google</span>
          </button>

          <p className="text-center text-sm mt-6 text-gray-600">
            Don't have an account?{' '}
            <a href="#" className="text-black font-semibold underline">Sign Up</a>
          </p>
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
  );
};

export default signin;
