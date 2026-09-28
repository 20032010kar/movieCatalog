import React from "react";

interface MovieCardProps {
    id: string | number;
    title: string;
    genre: string;
    year: number;
    image: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ id, title, genre, year, image }) => {
    return (
        <div className="bg-purple-900/40 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:border-amber-500/60 transition duration-300 flex flex-col h-full border border-amber-500/30">
            <div className="relative w-full h-72 bg-purple-950 overflow-hidden">
                <img 
                    src={image} 
                    alt={`Постер фільму ${title}`} 
                    className="w-full h-full object-cover object-top" 
                />
                <span className="absolute top-3 right-3 bg-purple-950/90 text-amber-400 border border-amber-500/40 text-xs font-bold px-2.5 py-1 rounded-lg shadow-md">
                    {year}
                </span>
            </div>
            
            <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                    <h2 className="text-xl font-bold text-white mb-1.5 leading-snug">{title}</h2>
                    <p className="text-sm text-purple-200/80 mb-3">{genre}</p>
                    <span className="text-xs text-purple-300/60">ID: {id}</span>
                </div>
                
                <div className="mt-5 pt-3 border-t border-purple-800/60 flex justify-between items-center">
                    <button className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-purple-950 font-bold rounded-xl transition shadow-md">
                        Детальніше
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;