import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Footer } from '../Components/Footer';
import { Navbar } from '../Components/Navbar';
import { About } from '../Pages/About';
import { Blog } from '../Pages/Blog';
import { BlogPost } from '../Pages/BlogPost';
import { Home } from '../Pages/Home';
import { Photos } from '../Pages/Photos';
import { Work } from '../Pages/Work';
import Box from '@mui/material/Box';

export function Navigation() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                  <Routes>
                      <Route path="Home" element={<Home />} />
                      <Route path="/" element={<Navigate to="Home" />} />
                      <Route path="About" element={<About />} />
                      <Route path="Blog" element={<Blog />} />
                      <Route path="Blog/Post" element={<BlogPost />} />
                      <Route path="Photos" element={<Photos />} />
                      <Route path="Work" element={<Work />} />
                  </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}
