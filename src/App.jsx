import Navbar from './components/Navbar'
import Home from './components/Home'
import Matrix from './components/Matrix'
import About from './components/About'
import Course from './components/Course/Course'
import Blog from './components/Blog/Blog'
import Client from './components/ClientReview/Client'
import Contact from './components/Contact'
import Faq from './components/Faq'
import Footer from './components/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutPage from './components/AboutPage'
import CoursePage from './components/CoursePage'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
        <div>
          <Navbar />
          <Home />
          <Matrix />
          <About />
          <Course />
          <Client />
          <Contact />
          <Faq />
          <Footer />
        </div>
    },

    {
      path: "/aboutpage",
      element:
        <div>
          <AboutPage />
          
        </div>
    },

    {
      path: "/coursepage",
      element:
        <div>
          <CoursePage/>       
        </div>
    },


    {
      path: "/about",
      element:
        <div>
          <Navbar />
          <About />
          <Footer /> 
        </div>
    },

    {
      path: "/Course",
      element:
        <div>
          <Navbar />
          <Course />
          <Footer /> 
        </div>
    },

    {
      path: "/blog",
      element:
        <div>
          <Navbar />
          <Blog />
          <Footer /> 
        </div>
    },

    {
      path: "/contact",
      element:
        <div>
          <Navbar />
          <Contact />
          <Footer /> 
        </div>
    },
  ]
)

function App() {

  return (
    <div>
      <RouterProvider router={router} />
      {/* <Navbar/>
      <Home/>
      <Matrix/>
      <About/>
      <Course/>
      <Blog/><Client/><Contact/>
      <Faq/>
      <Footer/> */}
    </div>
  )
}
export default App
