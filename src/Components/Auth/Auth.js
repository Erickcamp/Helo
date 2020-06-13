import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { loginUser } from "../../ducks/reducer";
import './Auth.css'

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  login = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    axios
      .post("/auth/login", { username, password })
      .then((res) => {
        this.props.loginUser(res.data);
        this.props.history.push("/dashboard");
      })
      .catch((err) => {
        alert("Could not log in");
        console.log(err);
      });
  };

  register = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    axios
      .post("/auth/register", { username, password })
      .then((res) => {
        this.props.loginUser(res.data);
        this.props.history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className='auth-container'>
        <form onSubmit={(e) => this.login(e)} className='form-container'>
        <img src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fsmile%20face.png?v=1591393051733" alt="site logo"/>
        <h1>Helo</h1>
        <div className='auth-info'>
          <input
            placeholder="Username"
            type="text"
            name="username"
            value={username}
            onChange={this.changeHandler}
            className='auth-input-box'
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={this.changeHandler}
            className='auth-input-box'
          />
          </div>
          <button onClick={this.login} className='login-register-btn'>Login</button>
          <button onClick={this.register} className='login-register-btn'>Register</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState;
export default connect(mapStateToProps, { loginUser })(Auth);
