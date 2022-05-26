
import Header from '../../components/header/Header';
import './HomeStyle/HomeStyle.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Footer from '../../components/footer/Footer';
import data from '../../Data'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Home() {
  const navigate = useNavigate()
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div className="App">
      <Header />
      <div className="appBody">
        <div className="firstSecreen">
          <div className="text">
            <h1>{data[0].title}</h1>
            <p>{data[0].opis}</p>
            <button><i className="fa fa-play" aria-hidden="true"></i> Play </button>
          </div>
        </div>
        <div className="secondScreen">
          <h2>Comedies</h2>
          <div className="listOfMovies">
          <Swiper
        slidesPerView={5}
        spaceBetween={10}
        slidesPerGroup={5}
        loop={false}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
            {data.map((movie, i) => {
              return(<SwiperSlide 
                key={movie.id}
                onClick={()=>{navigate('/movie/' + movie.id)}}
              className="movie">
                <div className='movieContent'>
                  <img src={movie.img} alt="" />
                  <div className="info">
                    <p>{movie.title}</p>
                    <div className="onHover">
                      <i className="fa fa-play" aria-hidden="true"></i>
                      <i className="fa fa-plus" aria-hidden="true"></i>
                      <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </SwiperSlide>)
            })}
      </Swiper>
          </div>
        </div>
        <div className="secondScreen">
          <h2>Tragedy</h2>
          <div className="listOfMovies">
          <Swiper
        slidesPerView={5}
        spaceBetween={10}
        slidesPerGroup={5}
        loop={false}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
            {data.map((movie, i) => {
              return(<SwiperSlide 
                key={movie.id}
                onClick={()=>{navigate('/movie/' + movie.id)}}
              className="movie">
                <div className='movieContent'>
                  <img src={movie.img} alt="" />
                  <div className="info">
                    <p>{movie.title}</p>  
                    <div className="onHover">
                      <i className="fa fa-play" aria-hidden="true"></i>
                      <i className="fa fa-plus" aria-hidden="true"></i>
                      <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </SwiperSlide>)
            })}
      </Swiper>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
