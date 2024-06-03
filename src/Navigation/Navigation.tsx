import Box from '@mui/material/Box';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from '../Components/Footer';
import { Navbar } from '../Components/Navbar';
import { BLOG_PATH, HOME_PATH, PATHFINDER_PROJECT_PATH, TREE_PROJECT_PATH } from '../constants';
import { Blog } from '../Pages/Blog';
import { BlogPost } from '../Pages/BlogPost';
import { Home } from '../Pages/Home';
import { Pathfinder } from '../Pages/Pathfinder';
import TreeTraverser from '../Projects/TreeTraverser/TreeTraverser';

export function Navigation() {
    return (
        <div>
            <BrowserRouter>
                <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                    <Navbar />
                    <Routes>
                        <Route path={HOME_PATH} element={<Home />} />
                        <Route path={BLOG_PATH} element={<Blog />} />
                        <Route path="blog/post" element={<BlogPost />} />
                        <Route path={PATHFINDER_PROJECT_PATH} element={<Pathfinder />} />
                        <Route path={TREE_PROJECT_PATH} element={<TreeTraverser />} />
                    </Routes>
                    <Footer />
                </Box>
            </BrowserRouter>
        </div>
    );
}
