import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      img: "",
      content: "",
    };
  }

  handleSubmit = () => {
    axios
      .post("/api/posts", {
        ...this.state,
        author_id: this.props.user.user.userId,
      })
      .then((res) => {
        this.props.history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  changeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { title, img, content } = this.state;
    return (
      <div>
        <h2>New Post</h2>
        <label>Post Title:</label>
        <input
          placeholder="title"
          name="title"
          value={title}
          onChange={this.changeHandler}
        />
        <label>Image URL</label>
        <input
          placeholder="image"
          name="img"
          value={img}
          onChange={this.changeHandler}
        />
        <label>Post Content:</label>
        <input
          placeholder="start typing here"
          name="content"
          value={content}
          onChange={this.changeHandler}
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState;
export default connect(mapStateToProps)(Form);
