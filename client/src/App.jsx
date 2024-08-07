import React, { useState, useEffect } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import QA from './pages/QA';
import About from './pages/About';
import Profile from './pages/Profile';
import NotFoundPage from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import ProcessingScreen from './component/ProcessingScreen'; // Import the new component
import Results from './component/Results'; // Importing the new Results component

import { Toaster } from 'react-hot-toast';
import './styles/App.css';

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000'; // Adjust this if needed
axios.defaults.withCredentials = true;

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    axios.get('/user/profile', { withCredentials: true })
      .then(response => {
        if (response.data) {
          setIsAuthenticated(true);
        }
      })
      .catch(error => {
        setIsAuthenticated(false);
      });
  }, []);

  const handleLogout = () => {
    axios.post('/logout', {}, { withCredentials: true })
      .then(() => {
        setIsAuthenticated(false);
        window.location.href = '/'; // Redirect to home after logout
      });
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout isAuthenticated={isAuthenticated} handleLogout={handleLogout} />}>
        <Route index element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path='/qa' element={<QA />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path="/results" element={<Results />} />
        <Route path='/processing' element={<ProcessingScreen />} /> {/* Add the new route */}
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      <Toaster toastOptions={{ duration: 2000 }} />
    </>
  );
};

export default App;
