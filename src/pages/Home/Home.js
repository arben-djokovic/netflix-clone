
import Header from '../../components/header/Header';
import './HomeStyle/HomeStyle.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

function Home() {
  let data = [
    {
        img: 'https://occ-0-1490-1489.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVfUFPfNXwGMqjYBmWHdXPwTuPQCXtUjHk42OcmbIPllhZIk-nNGh7v4XlqsdAEXpLoJuBoI68W7A2lZV6vgyMxAwk0LWsECavRI.webp?r=038',
        title: 'Toscana',
        opis: 'IOSHFDIFSD fsjidkfbsdk sfjndslkfndsjf dsu sdnfuosdhfuidscs sdfniidsucndskj sdfnuisdfnkds csdiuhfcdsk'
    },
    {
        img: 'https://occ-0-1490-1489.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVfUFPfNXwGMqjYBmWHdXPwTuPQCXtUjHk42OcmbIPllhZIk-nNGh7v4XlqsdAEXpLoJuBoI68W7A2lZV6vgyMxAwk0LWsECavRI.webp?r=038',
        title: 'Toscana',
        opis: 'IOSHFDIFSD fsjidkfbsdk sfjndslkfndsjf dsu sdnfuosdhfuidscs sdfniidsucndskj sdfnuisdfnkds csdiuhfcdsk'
    },
    {
        img: 'https://occ-0-1490-1489.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVfUFPfNXwGMqjYBmWHdXPwTuPQCXtUjHk42OcmbIPllhZIk-nNGh7v4XlqsdAEXpLoJuBoI68W7A2lZV6vgyMxAwk0LWsECavRI.webp?r=038',
        title: 'Toscana',
        opis: 'IOSHFDIFSD fsjidkfbsdk sfjndslkfndsjf dsu sdnfuosdhfuidscs sdfniidsucndskj sdfnuisdfnkds csdiuhfcdsk'
    },
    {
        img: 'https://occ-0-1490-1489.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVfUFPfNXwGMqjYBmWHdXPwTuPQCXtUjHk42OcmbIPllhZIk-nNGh7v4XlqsdAEXpLoJuBoI68W7A2lZV6vgyMxAwk0LWsECavRI.webp?r=038',
        title: 'Toscana',
        opis: 'IOSHFDIFSD fsjidkfbsdk sfjndslkfndsjf dsu sdnfuosdhfuidscs sdfniidsucndskj sdfnuisdfnkds csdiuhfcdsk'
    },
    {
        img: 'https://occ-0-1490-1489.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVfUFPfNXwGMqjYBmWHdXPwTuPQCXtUjHk42OcmbIPllhZIk-nNGh7v4XlqsdAEXpLoJuBoI68W7A2lZV6vgyMxAwk0LWsECavRI.webp?r=038',
        title: 'Toscana',
        opis: 'IOSHFDIFSD fsjidkfbsdk sfjndslkfndsjf dsu sdnfuosdhfuidscs sdfniidsucndskj sdfnuisdfnkds csdiuhfcdsk'
    },
    {
        img: 'https://occ-0-1490-1489.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVfUFPfNXwGMqjYBmWHdXPwTuPQCXtUjHk42OcmbIPllhZIk-nNGh7v4XlqsdAEXpLoJuBoI68W7A2lZV6vgyMxAwk0LWsECavRI.webp?r=038',
        title: 'Toscana',
        opis: 'IOSHFDIFSD fsjidkfbsdk sfjndslkfndsjf dsu sdnfuosdhfuidscs sdfniidsucndskj sdfnuisdfnkds csdiuhfcdsk'
    },
    {
        img: 'https://occ-0-1490-1489.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVfUFPfNXwGMqjYBmWHdXPwTuPQCXtUjHk42OcmbIPllhZIk-nNGh7v4XlqsdAEXpLoJuBoI68W7A2lZV6vgyMxAwk0LWsECavRI.webp?r=038',
        title: 'Toscana',
        opis: 'IOSHFDIFSD fsjidkfbsdk sfjndslkfndsjf dsu sdnfuosdhfuidscs sdfniidsucndskj sdfnuisdfnkds csdiuhfcdsk'
    },
    {
        img: 'https://occ-0-1490-1489.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVfUFPfNXwGMqjYBmWHdXPwTuPQCXtUjHk42OcmbIPllhZIk-nNGh7v4XlqsdAEXpLoJuBoI68W7A2lZV6vgyMxAwk0LWsECavRI.webp?r=038',
        title: 'Toscana',
        opis: 'IOSHFDIFSD fsjidkfbsdk sfjndslkfndsjf dsu sdnfuosdhfuidscs sdfniidsucndskj sdfnuisdfnkds csdiuhfcdsk'
    },
    {
        img: 'https://occ-0-1490-1489.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVfUFPfNXwGMqjYBmWHdXPwTuPQCXtUjHk42OcmbIPllhZIk-nNGh7v4XlqsdAEXpLoJuBoI68W7A2lZV6vgyMxAwk0LWsECavRI.webp?r=038',
        title: 'Toscana',
        opis: 'IOSHFDIFSD fsjidkfbsdk sfjndslkfndsjf dsu sdnfuosdhfuidscs sdfniidsucndskj sdfnuisdfnkds csdiuhfcdsk'
    },
    {
        img: 'https://occ-0-1490-1489.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVfUFPfNXwGMqjYBmWHdXPwTuPQCXtUjHk42OcmbIPllhZIk-nNGh7v4XlqsdAEXpLoJuBoI68W7A2lZV6vgyMxAwk0LWsECavRI.webp?r=038',
        title: 'Toscana',
        opis: 'IOSHFDIFSD fsjidkfbsdk sfjndslkfndsjf dsu sdnfuosdhfuidscs sdfniidsucndskj sdfnuisdfnkds csdiuhfcdsk'
    }
]
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
            //     onMouseLeave={(e)=>{
            //         e.target.classList = "swiper-slide movie"
            //     }}
            //   onMouseEnter={(e)=>{
            //     e.target.classList = "swiper-slide movieHover"
            //   }} 
              className="movie">
                <img src={movie.img} alt="" />
                <div className="info">
                  <p>{movie.title}</p>
                  <div className="onHover">
                    <i className="fa fa-play" aria-hidden="true"></i>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                    <i className="fa fa-thumbs-up" aria-hidden="true"></i>
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
            //     onMouseLeave={(e)=>{
            //         e.target.classList = "swiper-slide movie"
            //     }}
            //   onMouseEnter={(e)=>{
            //     e.target.classList = "swiper-slide movieHover"
            //   }} 
              className="movie">
                <img src={movie.img} alt="" />
                <div className="info">
                  <p>{movie.title}</p>  
                  <div className="onHover">
                    <i className="fa fa-play" aria-hidden="true"></i>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                    <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                  </div>
                </div>
              </SwiperSlide>)
            })}
      </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
