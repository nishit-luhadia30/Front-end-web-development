import React, { useState } from 'react'
import Light from '../assets/home/Light.png'

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

function pricing() {
  const [active, setActive] = useState('monthly');
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
      setOpenIndex(index === openIndex ? null : index);
  };


  return (
    <div>
      <div className=' h-64 items-center-safe ml-36 pl-2 justify-center grid grid-cols-2  w-[80%]'>
        <h1 className='text-5xl ml-20 font-bold'>Our Pricing for Different Courses</h1>
        <p>Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to
            cater to your needs: Free and Pro. We believe in providing flexible and affordable
            pricing options for our services. Whether you're an individual looking to enhance your skills
            or a business seeking professional development solutions, we have a plan that suits you. 
            Explore our pricing options below and choose the one that best fits your requirements.</p>
      </div>

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
                  } px-4 py-2 text-sm font-medium rounded-l-lg hover:bg-neutral-200`}
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
                  } px-4 py-2 text-sm font-medium rounded-r-lg hover:bg-neutral-200`}
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

export default pricing