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
      <button onClick={() => push("/newpost")}>New Post</button>
      <button onClick={() => push("/")}>Logout</button>
    </nav>
  );
};
export default withRouter(Nav);
