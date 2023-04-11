import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Applied_Jobs from './components/Applied Jobs/Applied_Jobs';
import Blog from './components/Blog/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('data.json')
        
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "applied-jobs",
        element: <Applied_Jobs></Applied_Jobs>,
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
