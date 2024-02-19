import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { imageUrl } from '../../constants/constants'

function Banner(props) {
  const [movie, setMovie] = useState([])
  
  useEffect(() => {
    const fetchData = async ()=>{
      const response = await axios.get(props.url)
      setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length)])
    }
    const interval = setInterval(fetchData, 5000)

    return ()=> clearInterval(interval)
  }, []);
  
  return (
    <div className="banner" style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}>
      <div className="content">
        <h1 className='title'>{movie.title? movie.title : ""}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">
          {movie ? movie.overview : ""}
        </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner