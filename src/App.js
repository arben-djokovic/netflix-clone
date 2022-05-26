import TvShows from './pages/TvShows/TvShows';
import Movies from './pages/Movies/Movies';
import Latest from './pages/Latest/Latest';
import MyList from './pages/MyList/MyList';
import Home from './pages/Home/Home'
import SpecificMovie from './pages/SpecificMovie/SpecificMovie';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/tv-shows" element={<TvShows />} />
    <Route path="/movies" element={<Movies />} />
    <Route path="/latest" element={<Latest />} />
    <Route path="/my-list" element={<MyList />} />
    <Route path="/movie/:id" element={<SpecificMovie />} />
  </Routes>);
}

export default App;
