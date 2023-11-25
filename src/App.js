import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";
import CreateUserContainer from "./containers/CreateUserContainer";
import DetailUserContainer from "./containers/DetailUserContainer";
import EditUserContainer from "./containers/EditUserContainer";
import HomeContainer from "./containers/HomeContainer";
import MainCarouselComponent from "./components/MainCarouselComponent";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter, Routes, Route } from "react-router-dom";

library.add(fas, faTwitter, faFontAwesome);


export default class App extends Component {
  
  render() {
    return (
      <div>
        <NavbarComponent />
        <MainCarouselComponent />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeContainer/>}/> {/* 👈 Renders at /app/ */}
          <Route path="/create" element={<CreateUserContainer />}/> {/* 👈 Renders at /app/ */}
          <Route path="/detail/:id" element={<DetailUserContainer />}/> {/* 👈 Renders at /app/ */}
          <Route path="/edit/:id" element={<EditUserContainer />}/> {/* 👈 Renders at /app/ */}
        </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
