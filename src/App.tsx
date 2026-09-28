import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import React from "react";

import HomePage from "./pages/home";
import CatalogPage from "./pages/catalog";
import AboutPage from "./pages/aboutThisSite";
import RootLayout from "./root_layout";

const NotFoundPage = () => (
    <div className="p-10 text-center">
        <h1 className="text-7xl text-red-950 uppercase font-bold mb-4">404 Not Found</h1>
        <p className="text-gray-600 mb-6">Сторінку не знайдено або її не існує.</p>
        <Link to='/' className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Головна сторінка
        </Link>
    </div>
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage /> 
            },
            {
                path: 'catalog',
                element: <CatalogPage />
            },
            {
                path: 'about',
                element: <AboutPage />
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage /> 
    }
]);

const App: React.FC = () => {
    return <RouterProvider router={router} />
}

export default App;