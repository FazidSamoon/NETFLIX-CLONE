import React, { useEffect, useState } from 'react'
import "../styles/row.css"
import axios from "../axios"

function Row({title , fetchUrl , islargeRow = false}) {

  const [movie , setMovie] = useState([]);

  const baseUrl = "https://image.tmdb.org/t/p/original/";
  
  useEffect(()=> {
    async function fetchData () {
        const request = await axios.get(fetchUrl);
        setMovie(request.data.results)
        return request;
    }
    fetchData();

  },[fetchUrl])

  
  return (
    <div className='row'>
        <h2 className='title'>{title}</h2>

        <div className='row-posters'>
            {movie.map(movie => (

                ((islargeRow && movie.poster_path) ||
                (!islargeRow && movie.backdrop_path)) && (
                    <img className= {`row_poster ${islargeRow && "row-posterLarge"}`} 
                        src={`${baseUrl}${islargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name} 
                    />
                )
                
            ))}
        </div>
        

    </div>
  )
}

export default Row