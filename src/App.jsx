import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import FirstSections from './pages/firstSections'
import MainSections from './pages/mainSections'
import RegistorSections from './pages/registorSections'

export default function App() {
  return (
    <div>
      <Header/>
      <FirstSections/>
      <MainSections/>
      <RegistorSections/>
      <Footer/>
    </div>
  )
}
