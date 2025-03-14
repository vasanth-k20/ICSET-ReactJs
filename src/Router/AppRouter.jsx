import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../Components/Main/Main'
import Home from '../Components/Home/Home'
import PaperSubmission from '../Components/Pages/PaperSubmission'
import ContactPage from '../Components/Pages/Contact'
import OrganizingCommittee from '../Components/Pages/OrganizeCommite'

export default function AppRouter() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<Main />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/papersub" element={<PaperSubmission />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/committee" element={<OrganizingCommittee />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
