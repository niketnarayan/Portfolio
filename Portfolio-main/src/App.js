import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Skills from './Components/Skills';
import Portfolio from './Components/Porfolio'; 
import Testimonial from './Components/Testimonial';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavBar /> */}
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/skills" element={<Skills />} /> 
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/testimonials" element={<Testimonial />} /> 
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
        {/* <Footer />  */}
       <NavBar />
        <Home />
        <About />
        <Services />
        <Skills />
        <Portfolio />
        <Testimonial />
        <Blog />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
