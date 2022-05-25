import React from 'react'
import "../styles/homeScreen.css"
import Nav from './Nav'
import Banner from './Banner'
import request from '../Request'
import Row from './Row'

function HomeScreen() {
  return (
    <div className='homeScreen'>
      {/* Navbar */}
        <Nav />

      {/* Banner */}
        <Banner />

      {/* Rows */}
        <Row 
          title = "NETFLIX ORIGINALS"
          fetchUrl = {request.fetchNetflixOriginals}
          islargeRow
        />
        <Row 
          title = "TRENDING NOW"
          fetchUrl = {request.fetchTrending}
        />
        <Row 
          title = "TOP RATED"
          fetchUrl = {request.fetchTopRated}        
        />
        <Row 
          title = "ACTION MOVIE"
          fetchUrl = {request.fetchActionMovies}         
        />
        <Row 
          title = "COMODY MOVIE"
          fetchUrl = {request.fetchComedyMovies}      
        />
        <Row 
          title = "HORROR MOVIE"
          fetchUrl = {request.fetchHorrorMovies}         
        />
        <Row 
          title = "ROMANCE MOVIE"
          fetchUrl = {request.fetchRomanceMovies}         
        />
        <Row 
          title = "DOCUMENTARIES"
          fetchUrl = {request.fetchDocumentaries}        
        />
        
    </div>
  )
}

export default HomeScreen