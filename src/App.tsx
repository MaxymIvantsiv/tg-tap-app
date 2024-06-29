import React from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation.tsx';
import {Route, Routes} from 'react-router-dom';
import Main from './pages/main/Main.tsx';
import Boost from './pages/boost/Boost.tsx';
import Achievements from './pages/achivements/Achievements.tsx';
import Invite from './pages/invite/Invite.tsx';
import Rating from './pages/rating/Rating.tsx';
import Tasks from './pages/tasks/Tasks.tsx';
import Layout from './components/layout/Layout.tsx';
import backgroundImage from './assets/background.png';
import {Box} from '@mui/material';


function App() {

    return (
        <Box
            sx={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundColor: 'background.default',
            }}
        >
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/boost" element={<Boost/>}/>
                    <Route path="/achievements" element={<Achievements/>}/>
                    <Route path="/invite" element={<Invite/>}/>
                    <Route path="/rating" element={<Rating/>}/>
                    <Route path="/tasks" element={<Tasks/>}/>
                </Route>
            </Routes>
            <Navigation/>
        </Box>
    );
}

export default App;
