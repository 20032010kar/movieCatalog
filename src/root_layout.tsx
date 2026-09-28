import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const RootLayout: React.FC = () => {
    return (
        <div className="flex h-screen bg-purple-950 text-purple-100 selection:bg-cyan-500 selection:text-purple-950">
            <aside className="w-64 bg-purple-900/80 backdrop-blur-md border-r border-purple-800/60 p-5 flex flex-col gap-4">
                <h2 className="text-xl font-bold mb-5 text-cyan-400 flex items-center gap-2">
                     Каталог фільмів
                </h2>
                
                <NavLink 
                    to="/" 
                    end
                className={({ isActive }: { isActive: boolean }) => {
                     if (isActive) {
                        return "bg-purple-800/60 text-cyan-400 font-bold border-l-4 border-cyan-400";
                    } else {
            return "text-purple-200 hover:text-cyan-300 hover:bg-purple-800/30";
                        }
                    }}
                    >
                        Головна сторінка
                </NavLink>

                <NavLink 
                to="/catalog" 
                className={({ isActive }: { isActive: boolean }) => {
                if (isActive) {
                    return "text-yellow-400 font-bold";
                } else {
                    return "text-white hover:text-gray-300";
                }
            }}
            >
                    Каталог карток
                </NavLink>

                

                <NavLink 
                to="/about" 
                    className={({ isActive }: { isActive: boolean }) => {
                if (isActive) {
                    return "text-yellow-400 font-bold";
                } else {
                    return "text-white hover:text-gray-300";
                }
                }}
            >
             Про проєкт
            </NavLink>
            </aside>

            <div className="flex-1 flex flex-col">
                
                <header className="h-16 bg-purple-900/50 backdrop-blur-md border-b border-purple-800/50 px-6 flex items-center font-semibold text-cyan-300 shadow-sm">
                    Шапка сайту
                </header>

                <main className="p-6 flex-1 overflow-y-auto bg-purple-950">
                    <Outlet />
                </main>

                <footer className="h-12 bg-purple-900/50 border-t border-purple-800/50 px-6 flex items-center text-sm text-purple-300/80">
                    Футер сайту
                </footer>
            </div>
        </div>
    );
};

export default RootLayout;
