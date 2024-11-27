import React from 'react'
import Nav from './Nav'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Services from './Services'
import ContactUs from './ContactUs'
import User from './User'

const App = () => {
    return (
        <>
            <Nav />

            <Routes>
                <Route exact path="/" Component={() => {
                    return <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bold' }}>
                        Welcome to useParams hook Example
                    </h1>;
                }} />
                <Route exact path="/home" Component={Home} />
                <Route exact path="/services" Component={Services} />
                <Route exact path="/contact_us" Component={ContactUs} />
                <Route exact path="/user/:fname/:lname" Component={User} />
            </Routes>
        </>
    )
}

export default App
