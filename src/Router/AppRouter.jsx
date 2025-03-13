import React from 'react'
import Hero from '../Components/Home/Hero'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../Components/Main/Main'

export default function AppRouter() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<Main />}>
                    <Route path="/" element={<Hero />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
