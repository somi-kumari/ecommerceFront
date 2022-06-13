import React from 'react'
import Header from '../../components/Header'

import Footer from '../../components/Footer'
import LoginBody from "../../components/LoginBody"
import './style.css'
export default function index() {
    return (
        <>
            <div style={{
                background: "linear-gradient(180deg, #127CC0 0%, #FFFFFF 100%)",
            }}>
                <Header />
                <LoginBody />
                <Footer />
            </div>
        </>
    )
}


