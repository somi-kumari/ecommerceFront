import React from 'react'
import Header from '../../components/Header'

import Footer from '../../components/Footer'
import SigninBody from "../../components/SigninBody"
import './style.css'
export default function index() {
    return (
        <>
            <div style={{
                background: "linear-gradient(180deg,salmon 0%, #FFFFFF 100%)",
            }}>
                <Header />
                <SigninBody />
                <Footer />
            </div>
        </>
    )
}


