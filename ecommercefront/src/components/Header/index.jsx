import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
export default function Header() {
    return (
        <>
            <div className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/updateproduct"> Products</Link></li>
                    <li><Link to="/deleteproduct">Delete Products</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/signup">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
            </div>
        </>

    )
}
