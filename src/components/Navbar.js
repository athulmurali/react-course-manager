import {Link} from "react-router-dom";
import React from 'react';


const NavBar =()=>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Hola</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li >
                    <Link to='/' className=" nav-link nav-item">Home</Link>
                    <span className="sr-only">(current)</span>
                </li>
                <li >
                    <Link to='/app' className=" nav-link nav-item">App</Link>
                </li>

                <li >
                    <Link to='/courses' className=" nav-link nav-item">Courses</Link>
                </li>

                {/*<li >*/}
                    {/*<Link to='/pageParam/456' className=" nav-link nav-item">PageParam</Link>*/}
                {/*</li>*/}


            </ul>
            <ul className="navbar-nav ml-auto">
                <li >
                    <Link to='/Login' className=" nav-link nav-item">Login</Link>
                    <span className="sr-only">(current)</span>
                </li>
            </ul>
        </div>
    </nav>
export default NavBar;
