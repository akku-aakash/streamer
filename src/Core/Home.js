import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const Home = () => {

    const [videos, setvideos] = useState([])

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/allvideos`)
            .then(res => {
                setvideos(res.data)
            })
            .catch(err => console.error(err));
    }, [])

    return (
        <div>
            Hello World
            {
                videos && videos.map((res) => (
                    <div>
                        <img src={'fa'} alt={res.title} />
                        <Link to={`/viewvideo/${res.video}`}><p>{res.title}</p></Link>
                        <p>{res.description}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Home;