import Header from "./components/header/Header";
import './AppStyle/App.css'

function App() {
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
      </div>
    </div>
  );
}

export default App;
