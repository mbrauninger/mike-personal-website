import Box from '@mui/material/Box';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from '../Components/Footer';
import { Navbar } from '../Components/Navbar';
import { Blog } from '../Pages/Blog';
import { BlogPost } from '../Pages/BlogPost';
import { Home } from '../Pages/Home';
import { Work } from '../Pages/Work';

export function Navigation() {
    return (
        <div>
            <BrowserRouter>
                <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                    <Navbar />
                    <Routes>
                        <Route path="" element={<Home />} />
                        <Route path="blog" element={<Blog />} />
                        <Route path="blog/post" element={<BlogPost />} />
                        <Route path="Work" element={<Work />} />
                    </Routes>
                    <Footer />
                </Box>
            </BrowserRouter>
        </div>
    );
}
