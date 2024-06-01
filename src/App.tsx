import Box from '@mui/material/Box';
import './App.css';
import { Navigation } from './Navigation/Navigation';

function App() {
    document.body.classList.add('background-red');
    return (
        <Box>
            <Navigation />
        </Box>
    );
}

export default App;
