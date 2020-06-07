import React, { Component } from "react";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      search: "",
      userposts: true,
    };
  }

  componentDidMount(){
      // STEP 3
      //get the latest posts
      //those posts will update this.state.posts
  }

  changeHandler = (e) => {
    this.setState({
      [e.name.target]: e.target.value,
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
    const { posts, search, userposts } = this.state;
    console.log("this.state", this.state);
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
            onClick={this.checkboxHandler}
            checked={userposts}
          />
        </div>
        <div className="posts">
          {
            //map over the posts and render some jsx
            //display title, authors name, and profile pic

            // posts.map()

            //step 4
            // Link on each post that will navigate you to the /post page
            // you will also send the post id as a nav param 
          }
        </div>
      </div>
    );
  }
}
