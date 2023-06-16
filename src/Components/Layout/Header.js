import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="navbar-brand">
                    <img src="" alt="error" />CODING<br/>NINJAS
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Courses</NavLink>
                        {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul> */}
                </li>
                <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Scholarship<span>UPTO 100% OFF</span></NavLink>
                        {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul> */}
                </li>
                <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Community</NavLink>
                        {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul> */}
                </li>
                <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Practie</NavLink>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <div className="navbar-subbrand">CodeStudio</div>
                            <li><NavLink className="dropdown-item">Contests</NavLink></li>
                            <li><NavLink className="dropdown-item">Guided Paths</NavLink></li>
                            <li><NavLink className="dropdown-item">Code Problems</NavLink></li>
                            <li><NavLink className="dropdown-item">Interview Experiences</NavLink></li>
                            <li><NavLink className="dropdown-item">Mock Tests</NavLink></li>
                        </ul>
                </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Header