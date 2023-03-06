import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import tmdbApi, { category, movieType, tvType } from '../../api/themoviedbApi';
import Button, { OutlineButton } from '../button/Button';
import Input from '../input/input';
import MovieCard from '../movie-card/MovieCard';
import './movie-grid.scss';

const MovieGrid = (props) => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const { keyword } = useParams();

    useEffect(() => {
        const getList = async () => {
            let response = null;
            if (keyword === undefined) {
                const params = {};
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(
                            movieType.upcoming,
                            { params }
                        );
                        break;
                    default:
                        response = await tmdbApi.getTvList(tvType.popular, {
                            params,
                        });
                        break;
                }
            } else {
                const params = {
                    query: keyword,
                };
                response = await tmdbApi.search(props.category, { params });
            }
            setItems(response.results);
            setTotalPage(response.total_page);
        };
        getList();
    }, [props.category, keyword]);

    const loadMore = async () => {
        let response = null;
            if (keyword === undefined) {
                const params = {
                    page: page + 1
                };
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(
                            movieType.upcoming,
                            { params }
                        );
                        break;
                    default:
                        response = await tmdbApi.getTvList(tvType.popular, {
                            params,
                        });
                        break;
                }
            } else {
                const params = {
                    page: page + 1,
                    query: keyword,
                };
                response = await tmdbApi.search(props.category, { params });
            }
            setItems([...items, ...response.results]);
            setTotalPage(page + 1);
    }

    return (
        <>
            <div className="section mb-3">
                <MovieSearch category={props.category} keyword={keyword} />
            </div>
            <div className='movie-grid'>
                {items.map((item, i) => (
                    <MovieCard category={props.category} item={item} key={i} />
                ))}
            </div>
            {
                page ? (
                    <div className="movie-grid__loadmore">
                        <OutlineButton className='small' onClick={loadMore} >Load More</OutlineButton>
                    </div>
                ) : null
            }
        </>
    );
};

const MovieSearch = (props) => {
    const navigate = useNavigate();
   
    const [keyword, setKeyword] = useState();
   
    const gotoSearch = useCallback(()=>{
        if (keyword.length > 0) {
            navigate(`/${category[props.category]}/search/${keyword}`);
        }
    },[keyword, props.category, navigate]);

    return (
        <div className="movie-search">
            <Input
                type="text"
                placeholder='Enter Keyword'
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
             />
             <Button className='small' onClick={gotoSearch} >Search</Button>
        </div>
    )
}

export default MovieGrid;
