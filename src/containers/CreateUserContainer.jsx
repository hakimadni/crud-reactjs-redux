import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { BackComponent } from '../components/BackComponent'

export default class CreateUserContainer extends Component {
  render() {
    return (
      <div>
        <Container>
        <BackComponent/>
        <h1>Create User</h1>
        </Container>
      </div>
    )
  }
}
