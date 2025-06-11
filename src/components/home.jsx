import React, { useState } from 'react'
import Light from '../assets/home/Light.png'
import Logo1 from '../assets/home/amazon.png'
import Logo2 from '../assets/home/adobe.png'
import Logo3 from '../assets/home/netflix.png'
import Logo4 from '../assets/home/google.png'
import Logo5 from '../assets/home/zoom.jpg'
import Logo6 from '../assets/home/soptify.png'
import Logo7 from '../assets/home/notion-symbol.png'
import Container from '../assets/home/Container.png'
import benefitsImg from '../assets/home/Button.png'
import CourseImg1 from '../assets/home/Image.png'
import CourseImg2 from '../assets/home/Image1.png'
import CourseImg3 from '../assets/home/Image2.png'
import CourseImg4 from '../assets/home/Image3.png'
import CourseImg5 from '../assets/home/Image4.png'
import CourseImg6 from '../assets/home/Image5.png'
import TestImg from '../assets/home/Image6.png'

const faqs = [
    {
        question: "Can I enroll in multiple courses at once?",
        answer:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
        hasCTA: true
    },
    {
        question: "What kind of support can I expect from instructors?",
        answer:
        "Our instructors provide support via forums, email, and live sessions depending on the course plan.",
        hasCTA: true
    },
    {
        question:
        "Are the courses self-paced or do they have specific start and end dates?",
        answer:
        "Most courses are self-paced. However, a few may have scheduled sessions or deadlines.",
        hasCTA: true
    },
    {
        question: "Are there any prerequisites for the courses?",
        answer:
        "Some advanced courses recommend prior knowledge, but beginner courses don't require any.",
        hasCTA: true
    },
    {
        question: "Can I download the course materials for offline access?",
        answer:
        "Yes, most of our courses offer downloadable materials in PDF or video format.",
        hasCTA: true
    },
];

function home() {
    const [active, setActive] = useState('monthly');
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

  return (
    <div>

        {/* <section class="bg-orange-50">
            <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
                <h2 class="text-4xl font-bold leading-tight mb-4 text-gray-900">
                    <h2>Unlock</h2>
                    <h2>Your Creative Potential</h2>
                </h2>
                <p class="text-gray-700 mb-6">with Online Design and Development Courses.</p>
                <p>Learn from Industry Experts and Enhance Your Skills.</p>
                <div class="space-x-4">
                <a href="#" class="bg-orange-500 text-white px-6 py-3 rounded shadow hover:bg-orange-600">Get Started</a>
                <a href="#" class="text-orange-600 font-semibold hover:underline">Explore Courses</a>
                </div>
            </div>
            <div class="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <img src="https://via.placeholder.com/400x300" alt="Hero Image" class="w-full h-full object-cover rounded-lg shadow-lg"/>
                <span class="text-gray-400">Hero Image</span>
            </div>
            </div>
        </section> */}

        <section class="text-center py-16 bg-white">
            <div class="max-w-5xl mx-auto">
                <div className='flex justify-center items-center'>
                    <img className='mr-5 h-28 relative top-5' src={Light} alt="" />
                    <h1 class="text-5xl md:text-7xl font-semibold mb-4 select-none">
                        <span class="text-orange-400 text-9xl relative top-14">Unlock</span> Your Creative <span className='text-white text-xl'>hsdcdcsdcsdcsdcsdcsdcsdcello</span> Potential
                    </h1>
                </div>
                
                <p class="text-gray-800 mb-3 text-4xl">with Online Design and Development Courses.</p>
                <p className='text-gray-500 text-lg mb-6'>Learn from Industry Experts and Enhance Your Skills.</p>
                <div class="space-x-4">
                    <button class="bg-orange-400 text-white px-6 py-3 rounded hover:bg-orange-300">Explore Courses</button>
                    <button class="text-orange-400 border border-orange-400 px-6 py-3 rounded hover:bg-orange-400 hover:text-white">Watch Video</button>
                </div>
            </div>
        </section>

        {/* <!-- Partner Logos --> */}
            <div class="flex justify-center mb-40 gap-6 py-6 bg-gray-50 text-xs text-gray-500">
                <span className='w-36 h-32 bg-white rounded-lg flex items-center justify-center'>
                    <img src={Logo1} alt="" />
                </span>
                <span className='w-36 h-32 bg-white rounded-lg flex items-center justify-center'>
                    <img src={Logo2} alt="" />
                </span>
                <span className='w-36 h-32 bg-white rounded-lg flex items-center justify-center'>
                    <img src={Logo3} alt="" />
                </span>
                <span className='w-36 h-32 bg-white rounded-lg flex items-center justify-center'>
                    <img src={Logo4} alt="" />
                </span>
                <span className='w-36 h-32 bg-white rounded-lg flex items-center justify-center'>
                    <img src={Logo5} alt="" />
                </span>
                <span className='w-36 h-32 bg-white rounded-lg flex items-center justify-center'>
                    <img src={Logo6} alt="" />
                </span>
                <span className='w-36 h-32 bg-white rounded-lg flex items-center justify-center'>
                    <img src={Logo7} alt="" />
                </span>
            </div>

            {/* <!-- Main Image Section --> */}

            <section class="py-6 flex justify-center mb-40">
                <div class="w-[90%] md:w-[80%] h-60 mt-10 bg-gray-200 flex items-center justify-center rounded-lg">
                <span class="text-gray-400">
                    <img src={Container} alt="" />
                </span>
                </div>
            </section>

            {/* <!-- Benefits Section --> */}
            <section class="py-12 px-4">
                <div class="max-w-7xl mx-auto">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-4xl font-bold">Benefits</h2>
                        <a href="#" class="text-orange-500 px-4 py-2 text-sm font-medium rounded-lg hover:bg-neutral-200">View All</a>
                    </div>
                    
                    <div class="mb-6 grid-cols-2">
                        <p className='text-left'>Develop job-ready creative skills through hands-on projects and expert mentorship.
                            Master modern design tools <br /> and turn your ideas into visual masterpieces. Boost your confidence by building a professional portfolio <br /> from scratch. Learn by doing - no fluff, just real-world design challenges.</p>
                    </div>
                
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        
                        <div class="bg-white shadow p-4 rounded">
                            <h3 class="text-6xl pl-44 font-bold mb-2">01</h3>
                            <h4 class="font-semibold mb-1">Flexible Learning Schedule</h4>
                            <p class="text-sm text-gray-600">Fit your coursework around your existing commitments and obligations.</p>
                            <div className='flex justify-end mt-2'>
                                <img src={benefitsImg} className='' />
                            </div>
                            
                        </div>
                        <div class="bg-white shadow p-4 rounded">
                            <h3 class="text-6xl pl-44 font-bold mb-2">02</h3>
                            <h4 class="font-semibold mb-1">Expert Instruction</h4>
                            <p class="text-sm text-gray-600">Learn from industry experts who have hands-on experience in design and development.</p>
                            <div className='flex justify-end mt-2'>
                                <img src={benefitsImg} className='' />
                            </div>
                        </div>
                        <div class="bg-white shadow p-4 rounded">
                            <h3 class="text-6xl pl-44 font-bold mb-2">03</h3>
                            <h4 class="font-semibold mb-1">Diverse Course Offerings</h4>
                            <p class="text-sm text-gray-600">Explore a wide range of design and development courses covering various topics.</p>
                            <div className='flex justify-end mt-2'>
                                <img src={benefitsImg} className='' />
                            </div>
                        </div>
                        <div class="bg-white shadow p-4 rounded">
                            <h3 class="text-6xl pl-44 font-bold mb-2">04</h3>
                            <h4 class="font-semibold mb-1">Updated Curriculum</h4>
                            <p class="text-sm text-gray-600">Access courses with up-to-date content reflecting the latest trends and industry practices.</p>
                            <div className='flex justify-end mt-2'>
                                <img src={benefitsImg} className='' />
                            </div>
                        </div>
                        <div class="bg-white shadow p-4 rounded">
                            <h3 class="text-6xl pl-44 font-bold mb-2">05</h3>
                            <h4 class="font-semibold mb-1">Practical Projects and Assignments</h4>
                            <p class="text-sm text-gray-600">Develop a portfolio showcasing your skills and abilities to potential employers.</p>
                            <div className='flex justify-end mt-2'>
                                <img src={benefitsImg} className='' />
                            </div>
                        </div>
                        <div class="bg-white shadow p-4 rounded">
                            <h3 class="text-6xl pl-44 font-bold mb-2">06</h3>
                            <h4 class="font-semibold mb-1">Interactive Learning Environment</h4>
                            <p class="text-sm text-gray-600">Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.</p>
                            <div className='flex justify-end mt-2'>
                                <img src={benefitsImg} className='' />
                            </div>
                        </div>

                        
                    </div>
                </div>
            </section>

        {/* <!-- Courses Section --> */}
        <section class="py-12 px-4 bg-white">
        <div class="max-w-7xl mx-auto">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-4xl font-bold">Our Courses</h2>
                <a href="/courses" class="text-orange-500 px-4 py-2 text-sm font-medium rounded-lg hover:bg-neutral-200">View All</a>
            </div>
            <div class="grid md:grid-cols-2 gap-y-20 gap-x-28">
            {/* <!-- Course Card --> */}
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div class="h-44 bg-gray-200 flex items-center justify-center">
                        <span class="text-gray-400">
                            <img src={CourseImg1} alt="" />
                        </span>
                    </div>
                    <div class="mt-14 p-4">
                        <div className='flex justify-end-safe '>
                            <button className='mt-3 text-xs text-gray-500 px-3 py-1 shadow-sm border-neutral-300'>4 weeks</button>
                            <button className='mt-3 text-xs text-gray-500 px-2 py-1 shadow-sm border-neutral-300'>Beginner</button>
                            <p className='px-40'></p>
                            <p class="text-xs text-gray-500 mt-4 mb-1">By John Smith</p>
                            
                        </div>
                        
                        <h3 class="font-semibold mt-2 pl-1 mb-2 text-left">Web Design Fundamentals</h3>
                        <p class="text-sm text-gray-600 ml-1 mb-4 text-left">Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
                        <a href="/courses/web-design-fundamentals" class="text-orange-500 px-48 py-3 text-sm font-medium rounded-lg hover:bg-neutral-200">Get it Now</a>
                    </div>
                </div>

                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div class="h-44 bg-gray-200 flex items-center justify-center">
                        <span class="text-gray-400">
                            <img src={CourseImg2} alt="" />
                        </span>
                    </div>
                    <div class="p-4 mt-14">
                        <div className='flex justify-end-safe '>
                            <button className='mt-3 text-xs text-gray-500 px-3 py-1 shadow-sm border-neutral-300'>6 weeks</button>
                            <button className='mt-3 text-xs text-gray-500 px-2 py-1 shadow-sm border-neutral-300'>Intermediate</button>
                            <p className='px-36'></p>
                            <p class="text-xs text-gray-500 mt-4 mb-1">By Emily Johnson</p>
                            
                        </div>
                        
                        <h3 class="font-semibold mt-3 mb-2 text-left pl-1">UI/UX Design</h3>
                        <p class="text-sm text-gray-600 ml-1 mb-4 text-left">Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.</p>
                        <a href="/courses/ui-ux-design/" class="text-orange-500 px-48 py-3 text-sm font-medium rounded-lg hover:bg-neutral-200">Get it Now</a>
                    </div>
                </div>

                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div class="h-44 bg-gray-200 flex items-center justify-center">
                        <span class="text-gray-400">
                            <img src={CourseImg3} alt="" />
                        </span>
                    </div>
                    <div class="p-4 mt-14">
                        <div className='flex justify-end-safe '>
                            <button className='mt-3 text-xs text-gray-500 px-3 py-1 shadow-sm border-neutral-300'>8 weeks</button>
                            <button className='mt-3 text-xs text-gray-500 px-2 py-1 shadow-sm border-neutral-300'>Intermediate</button>
                            <p className='px-36'></p>
                            <p class="text-xs text-gray-500 mt-4 mb-1">By David Brown</p>
                            
                        </div>
                        
                        <h3 class="font-semibold mt-3 mb-2 text-left pl-1">Mobile App Development</h3>
                        <p class="text-sm text-gray-600 ml-1 mb-4 text-left">Dive into the world of mobile app development. Learn invovative things to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.</p>
                        <a href="/courses/mobile-app-development/" class="text-orange-500 px-48 py-3 text-sm font-medium rounded-lg hover:bg-neutral-200">Get it Now</a>
                    </div>
                </div>

                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div class="h-44 bg-gray-200 flex items-center justify-center">
                        <span class="text-gray-400">
                            <img src={CourseImg4} alt="" />
                        </span>
                    </div>
                    <div class="p-4 mt-14">
                        <div className='flex justify-end-safe '>
                            <button className='mt-3 text-xs text-gray-500 px-3 py-1 shadow-sm border-neutral-300'>10 weeks</button>
                            <button className='mt-3 text-xs text-gray-500 px-2 py-1 shadow-sm border-neutral-300'>beginner</button>
                            <p className='px-36'></p>
                            <p class="text-xs text-gray-500 mt-4 mb-1">By Sarah Thompson</p>
                            
                        </div>
                        
                        <h3 class="font-semibold mt-3 mb-3 text-left pl-1">Graphic Design for Beginners</h3>
                        <p class="text-sm text-gray-600 ml-1 mb-4 text-left">Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.</p>
                        <a href="/courses/graphic-design-for-beginners/" class="text-orange-500 px-48 py-3 text-sm font-medium rounded-lg hover:bg-neutral-200">Get it Now</a>
                    </div>
                </div>

                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div class="h-44 bg-gray-200 flex items-center justify-center">
                        <span class="text-gray-400">
                            <img src={CourseImg5} alt="" />
                        </span>
                    </div>
                    <div class="p-4 mt-14">
                        <div className='flex justify-end-safe '>
                            <button className='mt-3 text-xs text-gray-500 px-3 py-1 shadow-sm border-neutral-300'>10 weeks</button>
                            <button className='mt-3 text-xs text-gray-500 px-2 py-1 shadow-sm border-neutral-300'>Intermediate</button>
                            <p className='px-36'></p>
                            <p class="text-xs text-gray-500 mt-4 mb-1">By Michael Adams</p>
                            
                        </div>
                        
                        <h3 class="font-semibold mt-3 mb-3 text-left pl-1">Front-End Web Development</h3>
                        <p class="text-sm text-gray-600 ml-1 mb-4 text-left">Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.</p>
                        <a href="/courses/front-end-web-development/" class="text-orange-500 px-48 py-3 text-sm font-medium rounded-lg hover:bg-neutral-200">Get it Now</a>
                    </div>
                </div>

                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div class="h-44 bg-gray-200 flex items-center justify-center">
                        <span class="text-gray-400">
                            <img src={CourseImg6} alt="" />
                        </span>
                    </div>
                    <div class="p-4 mt-14">
                        <div className='flex justify-end-safe '>
                            <button className='mt-3 text-xs text-gray-500 px-3 py-1 shadow-sm border-neutral-300'>6 week</button>
                            <button className='mt-3 text-xs text-gray-500 px-2 py-1 shadow-sm border-neutral-300'>Advance</button>
                            <p className='px-40'></p>
                            <p class="text-xs text-gray-500 mt-4 mb-1">By Jennifer Wilson</p>
                            
                        </div>
                        
                        <h3 class="font-semibold mt-3 mb-2 text-left pl-1">Advanced JavaScript</h3>
                        <p class="text-sm text-gray-600 ml-1 mb-4 text-left">Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.</p>
                        <a href="/courses" class="text-orange-500 px-48 py-3 text-sm font-medium rounded-lg hover:bg-neutral-200">Get it Now</a>
                    </div>
                </div>

                
            
            </div>
        </div>
        </section>

        {/* <!-- Testimonials --> */}
        <section class="py-12 px-4 bg-gray-50">
            <div class="max-w-7xl mx-auto">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-4xl font-bold">Testimonials</h2>
                    <a href="#" class="text-orange-500 px-4 py-2 text-sm font-medium rounded-lg hover:bg-neutral-200">View All</a>
                </div>
                <p className='text-left mb-8 '>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>

                <div class="grid md:grid-cols-2 gap-6">
                
                    <div class="bg-white p-4 shadow rounded">
                        <p class="text-sm text-gray-700 italic mb-10">
                        "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!"
                        </p>
                        <div className='flex justify-between items-center'>
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-16 h-16 mr-3 bg-gray-200 rounded-2xl">
                                    <img className='w-16 h-16 rounded-2xl' src={TestImg} alt="" />
                                </div>
                                <div>
                                    <p class="font-semibold text-lg">Sarah L</p>
                                    <p class="text-sm text-gray-500">Web Developer</p>
                                </div>
                            </div>
                            <div>
                                <button className='hover:bg-neutral-100 px-4 bg-orange-50 py-2 rounded-lg'>Read Full Story</button>
                            </div>
                        </div>                        
                    </div>

                    <div class="bg-white p-4 shadow rounded">
                        <p class="text-sm text-gray-700 italic mb-10">
                        "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!"
                        </p>
                        <div className='flex justify-between items-center'>
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-16 h-16 mr-3 bg-gray-200 rounded-2xl">
                                    <img className='w-16 h-16 rounded-2xl' src={TestImg} alt="" />
                                </div>
                                <div>
                                    <p class="font-semibold text-lg">Jason M</p>
                                    <p class="text-sm text-gray-500">App Developer</p>
                                </div>
                            </div>
                            <div>
                                <button className='hover:bg-neutral-100 px-4 bg-orange-50 py-2 rounded-lg'>Read Full Story</button>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white p-4 shadow rounded">
                        <p class="text-sm text-gray-700 italic mb-10">
                        "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!"
                        </p>
                        <div className='flex justify-between items-center'>
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-16 h-16 mr-3 bg-gray-200 rounded-2xl">
                                    <img className='w-16 h-16 rounded-2xl' src={TestImg} alt="" />
                                </div>
                                <div>
                                    <p class="font-semibold text-lg">Emily R</p>
                                    <p class="text-sm text-gray-500">UI Designer</p>
                                </div>
                            </div>
                            <div>
                                <button className='hover:bg-neutral-100 px-4 bg-orange-50 py-2 rounded-lg'>Read Full Story</button>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white p-4 shadow rounded">
                        <p class="text-sm text-gray-700 italic mb-10">
                        "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!"
                        </p>
                        <div className='flex justify-between items-center'>
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-16 h-16 mr-3 bg-gray-200 rounded-2xl">
                                    <img className='w-16 h-16 rounded-2xl' src={TestImg} alt="" />
                                </div>
                                <div>
                                    <p class="font-semibold text-lg">Michael K</p>
                                    <p class="text-sm text-gray-500">Graphic Designer</p>
                                </div>
                            </div>
                            <div>
                                <button className='hover:bg-neutral-100 px-4 bg-orange-50 py-2 rounded-lg'>Read Full Story</button>
                            </div>
                        </div>                                                
                    </div>
                    
                    
                
                </div>
            </div>
        </section>

{/* <!-- Pricing Section --> */}
        <section class="py-16 px-4 bg-white">
            <div class="flex justify-between items-center mb-6 px-40">
                <h2 class="text-4xl font-bold">Our Pricing</h2>
                <p className='px-72 ml-40'></p>
                <div>
                    <a
                        // href=''
                        onClick={() => setActive('monthly')}
                        className={`${
                        active === 'monthly'
                            ? 'bg-orange-500 text-white'
                            : 'text-orange-500'
                        } px-4 py-2 text-sm font-medium rounded-lg hover:bg-neutral-200`}
                    >
                        Monthly
                    </a>
                    <a
                        // href=''
                        onClick={() => setActive('yearly')}
                        className={`${
                        active === 'yearly'
                            ? 'bg-orange-500 text-white'
                            : 'text-orange-500'
                        } px-4 py-2 text-sm font-medium rounded-lg hover:bg-neutral-200`}
                    >
                        Yearly
                    </a>
                </div>
            </div>
            <p className='text-left mb-8 ml-40'>Start free, scale fast, and grow creatively. Whether you're just testing the waters or all-in on mastering your craft, our plans are built for flexibility and flow. <br /> No jargon, no fine print — just real value, clear benefits, and pricing that respects your hustle. Let your learning match your vibe.</p>

            <div class="max-w-7xl ml-48 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

            <div class="bg-white rounded-xl shadow-md max-w-md w-full overflow-hidden border">
                {/* <!-- Plan Title --> */}
                <div class="bg-orange-50 py-4 text-center border-b border-orange-100">
                    <h3 class="text-lg font-medium text-gray-800">Free Plan</h3>
                </div>

                {/* <!-- Price --> */}
                <div class="text-center py-8">
                    <h2 class="text-5xl font-bold text-gray-900">$0</h2>
                    <p class="text-sm text-gray-500 mt-1">/month</p>
                </div>

                {/* <!-- Features --> */}
                <div class="px-6 pb-8">
                    <h4 class="text-center font-semibold text-gray-800 mb-6">Available Features</h4>
                    <ul class="space-y-4">
                        {/* <!-- Feature Item --> */}
                        <li class="flex items-start gap-3 bg-white p-3 rounded border border-gray-100 shadow-sm">
                            <div class="bg-orange-50 text-orange-500 rounded p-1">✔️</div>
                            <p class="text-sm text-gray-700">Access to selected free courses.</p>
                        </li>
                        <li class="flex items-start gap-3 bg-white p-3 rounded border border-gray-100 shadow-sm">
                            <div class="bg-orange-50 text-orange-500 rounded p-1">✔️</div>
                            <p class="text-sm text-gray-700">Limited course materials and resources.</p>
                        </li>
                        <li class="flex items-start gap-3 bg-white p-3 rounded border border-gray-100 shadow-sm">
                            <div class="bg-orange-50 text-orange-500 rounded p-1">✔️</div>
                            <p class="text-sm text-gray-700">Basic community support.</p>
                        </li>
                        <li class="flex items-start gap-3 bg-white p-3 rounded border border-gray-100 shadow-sm">
                            <div class="bg-orange-50 text-orange-500 rounded p-1">✔️</div>
                            <p class="text-sm text-gray-700">No certification upon completion.</p>
                        </li>
                        <li class="flex items-start gap-3 bg-white p-3 rounded border border-gray-100 shadow-sm">
                            <div class="bg-orange-50 text-orange-500 rounded p-1">✔️</div>
                            <p class="text-sm text-gray-700">Ad-supported platform.</p>
                        </li>
                        <li class="flex items-start gap-3 bg-white p-3 rounded border border-gray-100 shadow-sm">
                            <div class="bg-orange-50 text-orange-500 rounded p-1">❌</div>
                            <p class="text-sm text-gray-700">Access to exclusive Pro Plan community forums.</p>
                        </li>
                        <li class="flex items-start gap-3 bg-white p-3 rounded border border-gray-100 shadow-sm">
                            <div class="bg-orange-50 text-orange-500 rounded p-1">❌</div>
                            <p class="text-sm text-gray-700">Early access to new courses and updates.</p>
                        </li>
                    </ul>
                </div>

                {/* <!-- CTA Button --> */}
                <div class="bg-orange-400 text-center py-4 hover:bg-orange-300 hover:cursor-pointer">
                <button class="text-white font-semibold text-sm hover:cursor-pointer">Get Started</button>
                </div>
                </div>

                <div class="bg-white rounded-xl shadow-md max-w-md w-full overflow-hidden border">
                {/* <!-- Plan Title --> */}
                <div class="bg-orange-50 py-4 text-center border-b border-orange-100">
                    <h3 class="text-lg font-medium text-gray-800">Pro Plan</h3>
                </div>

                {/* <!-- Price --> */}
                <div class="text-center py-8">
                    <h2 class="text-5xl font-bold text-gray-900">$79</h2>
                    <p class="text-sm text-gray-500 mt-1">/month</p>
                </div>

                {/* <!-- Features --> */}
                <div class="px-6 pb-8">
                    <h4 class="text-center font-semibold text-gray-800 mb-6">Available Features</h4>
                    <ul class="space-y-4">
                        {/* <!-- Feature Item --> */}
                        <li class="flex items-start gap-3 bg-white p-3 rounded border border-gray-100 shadow-sm">
                            <div class="bg-orange-50 text-orange-500 rounded p-1">✔️</div>
                            <p class="text-sm text-gray-700">Unlimited access to all courses.</p>
                        </li>
                        <li class="flex items-start gap-3 bg-white p-3 rounded border border-gray-100 shadow-sm">
                            <div class="bg-orange-50 text-orange-500 rounded p-1">✔️</div>
                            <p class="text-sm text-gray-700">Unlimited course materials and resources.</p>
                        </li>
                        <li class="flex items-start gap-3 bg-white p-3 rounded border border-gray-100 shadow-sm">
                            <div class="bg-orange-50 text-orange-500 rounded p-1">✔️</div>
                            <p class="text-sm text-gray-700">Priority support from instructors.</p>
                        </li>
                        <li class="flex items-start gap-3 bg-white p-3 rounded border border-gray-100 shadow-sm">
                            <div class="bg-orange-50 text-orange-500 rounded p-1">✔️</div>
                            <p class="text-sm text-gray-700">Course completion certificates.</p>
                        </li>
                        <li class="flex items-start gap-3 bg-white p-3 rounded border border-gray-100 shadow-sm">
                            <div class="bg-orange-50 text-orange-500 rounded p-1">✔️</div>
                            <p class="text-sm text-gray-700">Ad-free experience.</p>
                        </li>
                        <li class="flex items-start gap-3 bg-white p-3 rounded border border-gray-100 shadow-sm">
                            <div class="bg-orange-50 text-orange-500 rounded p-1">✔️</div>
                            <p class="text-sm text-gray-700">Access to exclusive Pro Plan community forums.</p>
                        </li>
                        <li class="flex items-start gap-3 bg-white p-3 rounded border border-gray-100 shadow-sm">
                            <div class="bg-orange-50 text-orange-500 rounded p-1">✔️</div>
                            <p class="text-sm text-gray-700">Early access to new courses and updates.</p>
                        </li>
                    </ul>
                </div>

                {/* <!-- CTA Button --> */}
                <div class="bg-orange-400 text-center py-4 hover:bg-orange-300 hover:cursor-pointer">
                    <button class="text-white font-semibold text-sm hover:cursor-pointer">Get Started</button>
                </div>
                </div>
            </div>
        </section>

        {/* <!-- FAQ Section --> */}
        <section className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Text Section */}
        <div>
            <h2 className="text-5xl font-bold mb-4">Frequently<br />Asked Questions</h2>
            <p className="text-sm text-gray-600 mb-6">
                Still have any questions? Contact our Team via{" "}
                <a className="text-orange-500 hover:underline">nishit95luhadia1@gmail.com</a>
            </p>
            <button className="border border-gray-200 px-5 py-2 rounded text-sm text-gray-700 hover:bg-gray-100">
            See All FAQ's
            </button>
        </div>

        {/* Right Accordion Section */}
        <div className="space-y-4">
            {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg p-4">
                <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                    >
                    <h3 className="font-medium">{faq.question}</h3>
                    <button className="text-xl bg-orange-50 text-orange-500 w-6 h-6 rounded text-center leading-5">
                        {openIndex === index ? "❌" : "✔️"}
                    </button>
                </div>
                {openIndex === index && (
                <div className="mt-4 text-sm text-gray-600">
                    {faq.answer}
                    {faq.hasCTA && (
                    <div className="mt-4 p-4 bg-gray-100 text-gray-800 rounded flex items-center justify-between">
                        <span>Enrollment Process for Different Courses</span>
                        <span>➡️</span>
                    </div>
                    )}
                </div>
                )}
            </div>
            ))}
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

export default home