import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      search: "",
      userposts: true,
      loading: true,
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  // let { search, userposts } = this.state;
  //   let url = `/api/posts/${this.props.userId}`;
  //   if (userposts && !search) {
  //     url += '?mine=true';
  //   } else if (!myPosts && search) {
  //     url += `?search=${search}`;
  //   } else if (myPosts && search) {
  //     url += `?mine=true&search=${search}`;
  //   }

  getPosts = () => {
    return axios
      .get("/api/posts")
      .then((res) => {
        this.setState({
          posts: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
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

  render() {
    const { search, userposts } = this.state;
    console.log("this.props", this.props);
    let posts = this.state.posts.map((el) => {
      return (
        <Link to={`/post/${el.post.id}`} key={el.post_id}>
          <div className="content_posts">
            <h3>{el.title}</h3>
            <div className="author_box">
              <p>Posted by: ${el.author_username}</p>
            </div>
          </div>
        </Link>
      );
    });
    return (
      <div>
        <div className="searchBox">
          <input
            placeholder="Search by Title"
            name="search"
            value={search}
            onChange={this.changeHandler}
          />
          <button>Search</button>
          <button>Reset</button>
          <span>My Posts</span>
          <input
            type="checkbox"
            onChange={this.checkboxHandler}
            checked={userposts}
          />
        </div>
        <div className="posts">
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
