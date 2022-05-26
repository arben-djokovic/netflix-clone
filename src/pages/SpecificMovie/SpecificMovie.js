import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './specificMovieStyle/specificMovieStyle.css'
import data from '../../Data'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

export default function SpecificMovie() {
    const id = useParams().id
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
  return (
    <div className='movie'>
        <Header />
        <div className="firstScreen">
            <img src={data[id].img} alt="" />
            <div className="text">
            <h1>{data[id].title}</h1>
            <p>{data[id].opis}</p>
            <button><i className="fa fa-play" aria-hidden="true"></i> Play </button>
          </div>
        </div>
        <Footer />
    </div>
  )
}
