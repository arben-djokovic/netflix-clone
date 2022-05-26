import React from 'react'
import './footerStyle/footerStyle.css'

export default function Footer() {
  return (
    <div className='footer'>
        <div className="icons">
            <i className="fa fa-facebook-f"></i>
            <i className="fa fa-instagram" aria-hidden="true"></i>
            <i className="fa fa-youtube-play" aria-hidden="true"></i>
        </div>
        <div className="lists">
            <div className="list">
                <p>Audio and Subtitles</p>
                <p>Media Center</p>
                <p>Privacy</p>
                <p>Contact us</p>
            </div>
            <div className="list">
                <p>Audio Description</p>
                <p>Investor Relations</p>
                <p>Legal Notices</p>
            </div>
            <div className="list">
                <p>Help Center</p>
                <p>Jobs</p>
                <p>Cookies</p>
            </div>
            <div className="list">
                <p>Gift Cards</p>
                <p>Terms Of Use</p>
                <p>Corporate Information</p>
            </div>
        </div>
        <button className="btn">Service Code</button>
    </div>
  )
}
