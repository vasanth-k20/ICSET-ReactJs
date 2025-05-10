import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../Components/Main/Main'
import Home from '../Components/Home/Home'
import PaperSubmission from '../Components/Pages/PaperSubmission'
import ContactPage from '../Components/Pages/Contact'
import OrganizingCommittee from '../Components/Pages/OrganizeCommite'
import AbtConference from '../Components/Pages/AbtConference'
import RegistDetails from '../Components/Pages/RegistDetails'
import ScrollToTop from '../Scrolltotop'
import MetaTags from '../Core/MetaTags'

export default function AppRouter() {
    return (
        <div>
            <BrowserRouter>
                <ScrollToTop />
                <MetaTags />
                <Routes>
                    <Route element={<Main />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/paper_submission" element={<PaperSubmission />} />
                        <Route path="/contact_us" element={<ContactPage />} />
                        <Route path="/organize_committee" element={<OrganizingCommittee />} />
                        <Route path="/about_the_conference" element={<AbtConference />} />
                        <Route path="/registration_details" element={<RegistDetails />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
