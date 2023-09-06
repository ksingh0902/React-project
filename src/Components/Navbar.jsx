import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="about">{props.about}</Link>
          </li>
           </ul>
           <div className="dropdown mx-2">
              <Link className="btn btn-secondary dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Change Theme
              </Link>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item">Green Background</a></li>
                <li><a className="dropdown-item" href="#">Blue Background</a></li>
                <li><a className="dropdown-item" href="#">Red Background</a></li>
                <li><a className="dropdown-item" href="#">Teal Background</a></li>
              </ul>
            </div>
           <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enabled DarkMode</label>
          </div>
      </div>
    </div>
  </nav>
  )
  }
// Navbar.prototype={
//     title: Proptypes.string.IsRequired,
//     about: Proptypes.string.IsRequired,
// }

// Navbar.defaultProps= {
//     title:'set title here',
//     about: 'set about text'
// }

export default Navbar