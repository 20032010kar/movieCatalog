import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <h1 className="text-7xl font-bold text-red-950 uppercase mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Сторінку не знайдено</h2>
            <p className="text-gray-500 mb-6 max-w-md">
                Схоже, сторінка, яку ви шукаєте, не існує або була переміщена.
            </p>
            <Link 
                to="/" 
                className="px-6 py-3 bg-slate-900 text-white font-medium rounded-lg shadow hover:bg-slate-800 transition duration-200"
            >
                Повернутися на головну
            </Link> 
        </div>
    );
};

export default NotFound;