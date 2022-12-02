import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './Pages/About';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>

    </Route>,

    // <Route path="/" element={<About />}>

    // </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);