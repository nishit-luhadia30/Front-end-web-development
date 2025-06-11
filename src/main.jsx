import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home.jsx'
import Course from './components/course.jsx'
import AboutUs from './components/aboutUs.jsx'
import Pricing from './components/pricing.jsx'
import Contact from './components/contact.jsx'
import WebDesignFundamentals from './components/course/webDesignFundamentals.jsx'
import MobileAppDevelopment from './components/course/mobileAppDevelopment.jsx'
import GraphicDesign from './components/course/graphicDesign.jsx'
import UiUxDesign from './components/course/uiUxDesign.jsx'
import FrontEnd from './components/course/frontEnd.jsx'
import Signin from './components/signin.jsx';
import Signup from './components/signup.jsx';

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'courses/',
        element: <Course />,
      },
      {
        path: 'aboutUs',
        element: <AboutUs />
      },
      {
        path: 'pricing',
        element: <Pricing />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'courses/web-design-fundamentals',
        element: <WebDesignFundamentals/>
      },
      {
        path: 'courses/ui-ux-design',
        element: <UiUxDesign/>
      },
      {
        path: 'courses/mobile-app-development',
        element: <MobileAppDevelopment/>
      },
      {
        path: 'courses/graphic-design-for-beginners',
        element: <GraphicDesign/>
      },
      {
        path: 'courses/front-end-web-development',
        element: <FrontEnd/>
      },
      {
        path: 'login',
        element: <Signin/>
      },
      {
        path: 'signup',
        element: <Signup/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
