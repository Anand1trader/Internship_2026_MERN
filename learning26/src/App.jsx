import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FooterComponent } from './components/FooterComponent'
import ContentComponent from './components/ContentComponent'
import { HeaderComponent } from './components/HeaderComponent'
import { MapDemo1 } from './components/MapDemo1'
import { MapDemo2 } from './components/MapDemo2'
import { MapDemo3 } from './components/MapDemo3'
import { MapDemo4 } from './components/MapDemo4'
import { MapDemo5 } from './components/MapDemo5'
import { MapDemo6 } from './components/MapDemo6'
import { MapDemo7 } from './components/MapDemo7'
import { MapDemo9 } from './components/MapDemo9'
import { MapDemo10 } from './components/MapDemo10'
import { Navbar } from './components/Navbar'
import { NetflixHome }from './components/NetflixHome'
import { NetflixMovies } from './components/NetflixMovies'
import { NetflixShows } from './components/NetflixShows'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import { NetflixLatest } from './components/NetflixLatest'
import { NetflixMylist } from './components/NetflixMylist'
import { HomeComponent } from './components/HomeComponent'
import { Watch } from './components/Watch'
import { ErrorNotFound } from './components/ErrorNotFound'
import { Teams } from './components/Teams'
import { TeamDetail } from './components/TeamDetail'

//import './App.css'

function App() {
  return (
    <div>
       <Navbar></Navbar>
       <Routes>
          <Route path="/netflixhome" element={<NetflixHome/>}></Route>
          <Route path="/netflixmovies" element={<NetflixMovies/>}></Route>
          <Route path="/netflixshows" element={<NetflixShows/>}></Route>
          <Route path="/" element={<HomeComponent/>}></Route>
          <Route path="/netflixlatest" element={<NetflixLatest/>}></Route>
          <Route path="/netflixmylist" element={<NetflixMylist/>}></Route>
          <Route path="/watch/:name" element = {<Watch/>}></Route>
          <Route path="/*" element = {<ErrorNotFound/>}></Route>
          <Route path='/teams' element={<Teams/>}></Route>
          <Route path='/teamdetail/:teamname' element={<TeamDetail/>}></Route>
       </Routes>
    </div>
    
  )
}
export default App
