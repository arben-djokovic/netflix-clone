import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './headerStyle/headerStyle.css'
import data from '../../Data'
export default function Header() {
    const navigate = useNavigate()
    let [notificationActive, setNotificationActive] = useState(false)
    let [isBrowseOpen, setIsBrowseOpen] = useState(false)
    let closeAll = useRef()
    let headerRef = useRef()
    let navigationRef = useRef()
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
        if(window.innerWidth <= 700){
            setIsBrowseOpen(false)
            navigationRef.current.style.cssText += 'display: none'
        }
        closeAll.current.style.cssText = 'display: none'
    }

    let toggleMobileBrowse = () => {
        if(isBrowseOpen){
            closeAll.current.style.cssText = 'display: none'
            navigationRef.current.style.cssText += 'display: none'
        }
        else{
            navigationRef.current.style.cssText += 'display: flex'
            closeAll.current.style.cssText = 'display: block'    
        }
        setIsBrowseOpen(!isBrowseOpen)
    }
    window.addEventListener("scroll", ()=>{
        if(window.scrollY >= 50){
            headerRef.current.style.cssText += "background-color: black; color: white"
        }
        else{
            headerRef.current.style.cssText += "background-color: rgba(0,0,0,0.5); color: black"
        }
    })
     
  return (<div className="bigHeaderDiv">
    <div ref={headerRef} className='header'>
        <div ref={closeAll} onClick={closeAllFun} className="closeAll"></div>
        <div className="first">
            <img  onClick={()=>{navigate('/')}} className='logo' src="../netflix-logo.png" alt="" />
            <p onClick={toggleMobileBrowse} className='mobileBrowse'>Browse <i className={ isBrowseOpen ? "fa fa-caret-down" : "fa fa-caret-up"} aria-hidden="true"></i></p>
            <ul ref={navigationRef}>
                <li onClick={()=>{navigate('/')}}>HOME</li>
                <li onClick={()=>{navigate('/tv-shows')}}>TV SHOWS</li>
                <li onClick={()=>{navigate('/movies')}}>MOVIES</li>
                <li onClick={()=>{navigate('/latest')}}>LATEST</li>
                <li onClick={()=>{navigate('/my-list')}}>MY LIST</li>
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
                    return(<div onClick={()=>{
                        navigate('/movie/'+notification.id)
                    }} key={i}>
                        <img src={notification.img} alt="" />
                        <p>{notification.title}</p>
                    </div>)
                })}
                </div>
            </div>
        </div>
    </div>
  </div>)
}
