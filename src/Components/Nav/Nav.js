import React, {Component} from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {getUser} from '../../ducks/reducer'

class Nav extends Component {

  componentDidMount(){
    this.props.getUser()
  }
  render(){
  const { push } = this.props.history;
  if (this.props.location.pathname === "/") {
    return null;
  }
  return (
    <nav>
      <button onClick={() => push("/dashboard")}>Home</button>
      <button onClick={() => push("/new")}>New Post</button>
      <button onClick={() => push("/")}>Logout</button>
    </nav>
  );
}
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, {getUser})(withRouter(Nav));
