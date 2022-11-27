import React from "react";
import { Main } from "./Components/Main";
import { Icon } from "@iconify/react";
import "./Components/style.css";
import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom";
import { Marvel } from "./Components/Marvel";
import { Comic } from "./Components/Comic";
import { IDComic } from "./Components/IDComic";
import { Creator } from "./Components/Creator";
import { IDCreator } from "./Components/IDCreator";
import { About } from "./Components/About";
import { Industry } from "./Components/Industry";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:id" element={<Marvel />} />
          <Route path="/comics" element={<Comic />} />
          <Route path="/comics/:id" element={<IDComic />} />
          <Route path="/creators" element={<Creator />} />
          <Route path="/creators/:id" element={<IDCreator />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/about" element={<About/>}/>
        </Routes>
        <footer>
          <NavLink to="/">
            <Icon icon="mdi:user-group" />
            <div className="link-text">Characters</div>
          </NavLink>
          <NavLink to="/comics">
            <Icon icon="mdi:cards" />
            <div className="link-text">Comics</div>
          </NavLink>
          <NavLink to="/creators">
            <Icon icon="mdi:pen" />
            <div className="link-text">Creators</div>
          </NavLink>
          <NavLink to="/industry">
            <Icon icon="mdi:calendar" />
            <div className="link-text">Industry</div>
          </NavLink>
          <NavLink to="/about">
            <Icon icon="mdi:about" />
            <div className="link-text">About</div>
          </NavLink>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
