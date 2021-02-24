import React from 'react'
import '../style.css'
import logo from '../img/logo.png'

function Header() {
  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-2 text-center">
                <figure>
                    <img src={logo} alt="logo" title="logo"></img>
                </figure>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-8 col-sm-offset-2 mt-5">
                <h1 className="title_primary">VETERINARIA</h1>
            </div>
        </div>
    </div>
  )
}

export default Header;