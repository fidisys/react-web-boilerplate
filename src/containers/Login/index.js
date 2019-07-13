import React, { Component } from 'react';
import { Container, LoginForm, LogoIcon, Label, Input, LoginBtn } from './styles';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.loginBtn = this.loginBtn.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  loginBtn(event) {
    event.preventDefault(); //prevents the default action
    this.props.history.push('/contents');
  }

  render() {
    const { username, password } = this.state;
    return (
      <Container>
        <LoginForm>
          <LogoIcon>LOGIN - TODAY</LogoIcon>
          <Label>Username</Label>
          <Input placeholder="Enter Username" value={username} name="username" onChange={this.handleInputChange} required></Input>
          <Label>Password</Label>
          <Input type="password" placeholder="Enter Password" value={password} name="password" onChange={this.handleInputChange} required></Input>
          <LoginBtn onClick={this.loginBtn}>Login</LoginBtn>
        </LoginForm>
      </Container>
    );
  }
}

export default LoginPage;
