import React, { Component } from "react";
import { Container } from "./styles";
import Loader from "components/Loader";

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Loader />
        <Container>Home Page</Container>
      </React.Fragment>
    );
  }
}

export default HomePage;
