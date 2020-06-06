import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../ducks/reducer";

export default class Auth extends Component {
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
    const { push } = this.props.history;
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
        console.log(err)
      });
  };

  register = (e) => {
      e.preventDefault()
      const {username, password} = this.state
      axios.post('/auth/register', {username, password})
      .then(res => {
          this.props.loginUser(res.data)
          this.props.history.push('/dashboard')
      })
      .catch(err => {
          console.log(err.response.data)
          alert(err.response.data)
      })
  }



  render() {
    const { username, password } = this.state;
    return (
      <div>
        <form onSubmit={(e) => this.login(e)}>
          <input
            placeholder="Username"
            type="text"
            name="username"
            value={username}
            onChange={(e) => this.changeHandler(e)}
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => this.changeHandler(e)}
          />
          <button onClick={this.login}>Login</button>
          <button onClick={this.register}>Register</button>
        </form>
      </div>
    );
  }
}
