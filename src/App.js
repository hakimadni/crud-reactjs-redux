import React, { Component } from 'react'
import NavbarComponent from './components/NavbarComponent'
import MainCarouselComponent from './components/MainCarouselComponent'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import TableComponent from './components/TableComponent'

library.add(fas, faTwitter, faFontAwesome)


export default class App extends Component {
  state  =  {
    title  : "RestFul  API  Test",
    users   : [
      {
        id: 1,
        nama:  "Hakim",
        alamat:  "Bintaro",
        umur: 21,
        noHP:  "082210339685"
      },
      {
        id: 2,
        nama:  "Hakim1",
        alamat:  "Bintaro1",
        umur: 22,
        noHP:  "082210339685"
      },
      {
        id: 3,
        nama:  "Hakim",
        alamat:  "Bintaro",
        umur: 23,
        noHP:  "082210339685"
      }
    ]
  }
  render() {
    return (
      <div>
        <NavbarComponent Title={this.state.title} />
        <MainCarouselComponent/>
        <TableComponent Users={this.state.users} />
      </div>
    )
  }
}
