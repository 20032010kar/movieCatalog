import React from "react";
import MovieCard from "../components/movieCard";

const movies = [
    {
        id: 1,
        title: "Людина-павук: Абсолютно новий день",
        genre: "супергеройський бойовик,пригоди",
        year: 2026,
        image: "https://upload.wikimedia.org/wikipedia/uk/d/d5/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D0%9B%D1%8E%D0%B4%D0%B8%D0%BD%D0%B8-%D0%BF%D0%B0%D0%B2%D1%83%D0%BA%D0%B0._%D0%90%D0%B1%D1%81%D0%BE%D0%BB%D1%8E%D1%82%D0%BD%D0%BE_%D0%BD%D0%BE%D0%B2%D0%B8%D0%B9_%D0%B4%D0%B5%D0%BD%D1%8C.jpg?utm_source=uk.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled"
    },
    {
        id: 2,
        title: "Нова людина-павук 2: Висока напруга",
        genre: "екшн на основі коміксів Marvel, бойовик,пригоди",
        year: 2014,
        image: "https://thumb.wikimedia.org/wikipedia/ru/thumb/7/77/%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%A7%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%BF%D0%B0%D1%83%D0%BA_2.jpg/330px-%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%A7%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%BF%D0%B0%D1%83%D0%BA_2.jpg?utm_source=ru.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
    },
    {
        id: 4,
        title: "Гаррі Поттер і філософський камінь",
        genre: "Фентези, Пригоди, Магія",
        year: 2001,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-T6A0iqYhHnRE1aPI59VXNIQU6v6n965uNEsAxloZxt8SfzIQePYamTM9PEhkPHUa2IGeh9vXmou1clOZZXas-9s3gLhAjBT9eLlyEw&s=10"
    },
    {
        id: 5,
        title: "Гаррі Поттер і Таємна кімната",
        genre: "Фентезі, Детектив, Пригоди",
        year: 2002,
        image: "https://image.tmdb.org/t/p/original/entVx8fXnznV93yhzZAWeBA7pZY.jpg"
    },
    {
        id: 6,
        title: "Аватар",
        genre: "Фентезі",
        year: 2009,
        image: "https://www.kinonews.ru/insimgs/2022/poster/poster109723_2.jpg"
    }
];
   

const CatalogPage: React.FC = () => {
    return (
        <div className="space-y-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-extrabold text-amber-400 tracking-wide">
                Каталог фільмів 🎬
            </h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {movies.map((movie) => (
                    <MovieCard 
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        genre={movie.genre}
                        year={movie.year}
                        image={movie.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default CatalogPage;