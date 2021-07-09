import { Star, Clock } from 'react-feather';

import '../../styles/moviecard.scss'

interface MovieCardProps {
    title: string;
    poster: string;
    rating: string;
    runtime: string;
}

function MovieCard({ title, poster, rating, runtime }: MovieCardProps) {
    return (
        <div className="movie-card">
            <img src={poster}
                alt={title}
            />
            <div>
                <div className="movie-info">
                    <span>{title}</span>
                    <div className="meta">
                        <div>
                            <Star /> {rating}
                        </div>
                        <div>
                            <Star /> {runtime}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default MovieCard;