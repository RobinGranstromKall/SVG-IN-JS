import React from 'react'
import {BrowserRouter, Link, Outlet, Route, Routes} from "react-router-dom";

import './App.css'
import {Title} from "./components/Title.jsx";
import ArrowToX from "./pages/ArrowToX.jsx";
import Home from "./pages/Home.jsx";
import Paths from "./pages/Paths.jsx";
import Simple from "./pages/Squares.jsx";


function NavLink({to, children}) {
  return (
    <Link to={to} className="navlink">
      {children}
    </Link>
  )
}

function Layout() {
  return (
    <div style={{position: "absolute", top: 0, left: 0, display: "block"}}>
      <nav style={{
        display: "flex",
        width: "100dvw",
        margin: "2rem 0",
        paddingBottom: "1rem",
        justifyContent: "center"
      }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/simple">Simple</NavLink>
        <NavLink to="/paths">Paths</NavLink>
        <NavLink to="/arrowToX">ArrowToX</NavLink>
      </nav>
      <main style={{display: "flex", flexDirection: "column", flex: 1, justifyContent: "center", maxWidth:"50%", margin: "0 auto"}}>
        <Outlet />
      </main>
    </div>
  );
}


function Thanks() {
  return <div>
    <Title>Tack för mig!</Title>
    <p>
      Jag hoppas att ni har fått lite inspiration till vad ni kan göra med React och SVG.
      Om det finns önskemål kan vi nu göra nån liten labb eller liknande om det är något ni känner att man kan förtydliga.
    </p>
  </div>;
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home/>}/>
          <Route path="/simple" element={<Simple />}/>
          <Route path="/paths" element={<Paths />}/>
          <Route path="/arrowToX" element={<ArrowToX />}/>
          <Route path="/thanks" element={<Thanks />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
