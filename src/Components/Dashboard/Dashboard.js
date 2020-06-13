import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

import "./Dashboard.css";
class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      search: "",
      userposts: true,
      loading: true,
      filter: "",
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    axios
      .get("/api/posts")
      .then((res) => {
        this.setState({
          posts: res.data,
          loading: false,
        });
      })
      .catch((err) => console.log(err));
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  checkboxHandler = () => {
    const { userposts } = this.state;
    if (userposts) {
      this.setState({
        userposts: false,
      });
    } else {
      this.setState({
        userposts: true,
      });
    }
  };

  searchPosts = () => {
    const { filter } = this.state;
    console.log("this is filter", filter);
    axios
      .get(`/api/posts/?filter=${filter}`)
      .then((res) => {
        this.setState({
          posts: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  resetState = () => {
    axios
      .get("/api/posts")
      .then((res) => {
        this.setState({ filter: "", posts: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { userposts, filter } = this.state;
    console.log("this.props", this.props);
    let posts = this.state.posts.map((el) => {
      return (
        <div
          key={el.id}
          onClick={() => this.props.history.push(`/posts/${el.id}`)}
        >
          <div className="content_posts dashboard_post_box">
            <h3>{el.title}</h3>
            <div className="username_box">
              <p>Posted by: {el.username}</p>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className="searchBox">
          <input
            placeholder="Search by Title"
            onChange={this.changeHandler}
            name="filter"
            value={filter}
          />
          <button onClick={this.searchPosts}>Search</button>
          <button onClick={this.resetState}>Reset</button>
          <span>My Posts</span>
          <input
            type="checkbox"
            onChange={this.checkboxHandler}
            checked={userposts}
          />
        </div>
        <div className="posts">
          {console.log(posts)}
          {!this.state.loading ? (
            posts
          ) : (
            <div className="load_box">
              <div className="load_background"></div>
              <div className="load"></div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState;
export default connect(mapStateToProps)(Dashboard);
