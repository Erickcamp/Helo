import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const Nav = (props) => {
  const { push } = props.history;
  if (props.location.pathname === "/") {
    return null;
  }
  return (
    <nav>
      <button onClick={() => push("/dashboard")}>Home</button>
      <button onClick={() => push("/new")}>New Post</button>
      <button onClick={() => push("/")}>Logout</button>
    </nav>
  );
};

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps)(withRouter(Nav));
