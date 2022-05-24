import React, { useRef, useState } from 'react'
import './headerStyle/headerStyle.css'

export default function Header() {
    let [notificationActive, setNotificationActive] = useState(false)
    let closeAll = useRef()
    let data = [
        {
            img: 'https://occ-0-1490-1489.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVfUFPfNXwGMqjYBmWHdXPwTuPQCXtUjHk42OcmbIPllhZIk-nNGh7v4XlqsdAEXpLoJuBoI68W7A2lZV6vgyMxAwk0LWsECavRI.webp?r=038',
            title: 'Toscana'
        },
        {
            img: 'https://occ-0-1490-1489.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVfUFPfNXwGMqjYBmWHdXPwTuPQCXtUjHk42OcmbIPllhZIk-nNGh7v4XlqsdAEXpLoJuBoI68W7A2lZV6vgyMxAwk0LWsECavRI.webp?r=038',
            title: 'Toscana'
        },
        {
            img: 'https://occ-0-1490-1489.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVfUFPfNXwGMqjYBmWHdXPwTuPQCXtUjHk42OcmbIPllhZIk-nNGh7v4XlqsdAEXpLoJuBoI68W7A2lZV6vgyMxAwk0LWsECavRI.webp?r=038',
            title: 'Toscana'
        }
    ]
    let openNotification = () => {
        if(notificationActive){
            closeAll.current.style.cssText = 'display: none'
        }
        else{
            closeAll.current.style.cssText = 'display: block'          
        }
        setNotificationActive(!notificationActive);
    }
    let closeAllFun = () => {
        setNotificationActive(false)
        closeAll.current.style.cssText = 'display: none'
    }
     
  return (
    <div className='header'>
        <div ref={closeAll} onClick={closeAllFun} className="closeAll"></div>
        <div className="first">
            <img className='logo' src="netflix-logo.png" alt="" />
            <ul>
                <li>HOME</li>
                <li>TV SHOWS</li>
                <li>MOVIES</li>
                <li>LATEST</li>
                <li>MY LIST</li>
            </ul>
        </div>
        <div className="second">
           <label htmlFor='input'> 
                <div className="search">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <input id='input' type="text" placeholder='Titles, people'/>
                </div>
            </label>
            <div className="notifications">
                <i onClick={openNotification} className="fa fa-bell" aria-hidden="true"></i>
                <div className={notificationActive ? 'openNotification' : 'closedNotification'}>  
                {data.map((notification, i) => {
                    return(<div key={i}>
                        <img src={notification.img} alt="" />
                        <p>{notification.title}</p>
                    </div>)
                })}
                </div>
            </div>
        </div>
    </div>
  )
}
