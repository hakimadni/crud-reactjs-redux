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
  state = {
    title: "RestFul  API  Test",
    users: [
      {
        id: 1,
        nama: "Hakim",
        alamat: "Bintaro",
        umur: 21,
        noHP: "082210339685",
      },
      {
        id: 2,
        nama: "Hakim1",
        alamat: "Bintaro1",
        umur: 22,
        noHP: "082210339685",
      },
      {
        id: 3,
        nama: "Hakim",
        alamat: "Bintaro",
        umur: 23,
        noHP: "082210339685",
      },
    ],
  };
  render() {
    return (
      <div>
        <NavbarComponent Title={this.state.title} />
        <MainCarouselComponent />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeContainer users={this.state.users}/>}/> {/* 👈 Renders at /app/ */}
          <Route path="/create" element={<CreateUserContainer />}/> {/* 👈 Renders at /app/ */}
          <Route path="/detail/:id" element={<DetailUserContainer />}/> {/* 👈 Renders at /app/ */}
          <Route path="/edit/:id" element={<EditUserContainer />}/> {/* 👈 Renders at /app/ */}
        </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
