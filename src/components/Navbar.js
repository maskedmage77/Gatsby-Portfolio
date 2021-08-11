import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <h1>{'<Hines />'}</h1>
            <div className="link">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/Projects">Projects</Link>
            </div>
        </nav>
    )
}
