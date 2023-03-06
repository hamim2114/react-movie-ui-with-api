import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import React from 'react';
import './App.scss'
import Header from './components/header/Header';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Detail from './pages/detail/Detail';

function App() {

    const Layout = () => {
        return (
            <>
                <Header/>
                <Outlet/>
                <Footer/>
            </>
        )
    };

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout/>,
            children: [
                {
                    path: '/',
                    element: <Home/>
                },
                {
                    path: '/:category/search/:keyword',
                    element: <Catalog/>
                },
                {
                    path: '/:category/:id',
                    element: <Detail/>
                },
                {
                    path: '/:category',
                    element: <Catalog/>
                }
            ]
        }
    ])

    return <RouterProvider router={router} />
}

export default App;
