import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import './App.css'
import axios from 'axios';
// Adjust baseURL to point to your backend server
axios.defaults.baseURL = 'http://localhost:8000'; // Adjust this if needed
axios.defaults.withCredentials = true;

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route  path='/' element={<MainLayout />}>
     <Route index element={<Home/>} />
     <Route path='/register' element={<Register />} />
     <Route path='/login' element={<Login />} />
</Route>
  )
);

const App = ()=> {
 return <RouterProvider router={router}/>;
};

export default App;

/*
import { Toaster } from 'react-hot-toast';
<Toaster  toastOptions={{ duration: 2000 }} />
*/
