import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar(props)
{
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
    <Link className="navbar-brand fs-1 title" to={''}>Graph CMS</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse links" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" to={`/part/web`}>Web Development</Link>
        <Link className="nav-link active" to={`/part/sport`}>Sports</Link>
        <Link className="nav-link active" to={`/part/education`}>Education</Link>
        <Link className="nav-link active" to={`/part/build`}>Building</Link>
      </div>
    </div>
  </div>
  </nav>
    )
}
