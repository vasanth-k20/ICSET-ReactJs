import React from 'react'
import Hero from './Hero'
import KeyDates from './KeyDates'
import Speakers from './Speakers'
import SponsorsSection from './Sponsers'

export default function Home() {
  return (
    <div>
        <Hero/>
        <Speakers/>
        <KeyDates/>
        <SponsorsSection/>
    </div>
  )
}
