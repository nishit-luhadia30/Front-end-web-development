import React from "react";
import { Crown, Medal, Smile, Zap } from "lucide-react"; // using lucide icons
import Light from '../assets/home/Light.png'

const achievements = [
  {
    icon: <Crown className="text-orange-500 w-6 h-6" />,
    title: "Trusted by Thousands",
    description:
      "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.",
  },
  {
    icon: <Medal className="text-orange-500 w-6 h-6" />,
    title: "Award-Winning Courses",
    description:
      "Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.",
  },
  {
    icon: <Smile className="text-orange-500 w-6 h-6" />,
    title: "Positive Student Feedback",
    description:
      "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.",
  },
  {
    icon: <Zap className="text-orange-500 w-6 h-6" />,
    title: "Industry Partnerships",
    description:
      "We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies.",
  },
];

const aboutUs = () => {
  const goals = [
    {
      icon: '🔒',
      title: 'Provide Practical Skills',
      description:
        'We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.',
    },
    {
      icon: '📖',
      title: 'Foster Creative Problem-Solving',
      description:
        'We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.',
    },
    {
      icon: '➕',
      title: 'Promote Collaboration and Community',
      description:
        'We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.',
    },
    {
      icon: '🔆',
      title: 'Stay Ahead of the Curve',
      description:
        'The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.',
    }
  ];

  return (
    <>

    <div className=' h-64 items-center-safe ml-36 pl-2 justify-center grid grid-cols-2  w-[80%]'>
        <h1 className='text-5xl ml-20 font-bold'>About Skillbridge</h1>
        <p>Welcome to our platform, where we are passionate about empowering individuals to master
           the world of design and development. We offer a wide range of online courses designed to
            equip learners with the skills and knowledge needed to succeed in the 
            ever-evolving digital landscape.</p>
      </div>

    <section className="px-4 py-16 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-2">Achievements</h2>
        <p className="text-gray-500 mb-10 text-lg max-w-3xl">
          Our commitment to excellence has led us to achieve significant
          milestones along our journey. Here are some of our notable
          achievements
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 border border-gray-100 flex items-start space-x-4"
            >
              <div className="bg-orange-100 rounded-md p-2">{item.icon}</div>
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-500 mt-1 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>



      <div className="bg-orange-50 mt-10 text-white px-20 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl text-black font-bold">Our Goals</h2>
        <p className="text-sm max-w-3xl mx-auto text-gray-700">
          At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world
           of design and development. We believe that education should be accessible and transformative, 
           enabling learners to pursue their passions and make a meaningful impact.
          Through our carefully crafted courses, we aim to
        </p>
      </div>

      {/* Goals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {goals.map((goal, index) => (
          <div
            key={index}
            className="bg-white text-gray-900 rounded-lg p-6 shadow hover:shadow-xl transition" 
          >
            <div className="text-3xl mb-4">{goal.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{goal.title}</h3>
            <p className="text-sm text-gray-700">{goal.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-white text-gray-900 rounded-lg px-6 py-12 text-center space-y-4 shadow-lg">
        <h2 className="text-2xl font-semibold">
          <span className="text-orange-500 font-bold">Together</span>, let's shape the future of digital innovation
        </h2>
        <p className="text-sm text-gray-700 max-w-xl mx-auto">
          Join us on this exciting learning journey and unlock your potential in design and development.
        </p>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-md font-semibold shadow hover:bg-orange-600 transition">
          Join Now
        </button>
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
    </>
  );
};

export default aboutUs;
