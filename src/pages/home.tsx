import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
    return (
        <div className="space-y-6 max-w-4xl">
            <div className="space-y-3">
                <h1 className="text-4xl font-extrabold text-amber-400 tracking-wide drop-shadow-sm">
                    Вітаємо у каталозі фільмів! <span className="text-white"></span>
                </h1>
                <p className="text-purple-200 text-lg leading-relaxed">
                   Це головна сторінка нашого сайту. Тут ви зможете знайти фільми на будь-який смак у нашому каталозі!
                </p>
            </div>

          

            <div className="pt-2">
                <Link 
                    to="/catalog"
                    className="inline-block bg-amber-500 hover:bg-amber-400 text-purple-950 font-bold px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-amber-500/20"
                >
                    Перейти до каталогу 
                </Link>
            </div>
        </div>
    );
};

export default Home;
