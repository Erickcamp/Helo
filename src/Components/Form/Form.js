import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
  constructor() {
    super();
    this.class = {
      title: "",
      img: "",
      content: "",
    };
  }

  handleSubmit = () => {
      if(this.props.userId){
          axios 
          .post(`/api/post/${this.props.userId}`, this.state)
          .then(res => this.props.history.push('/dashboard'))
      }
  }

  render() {
    return <div>This Component is Form</div>;
  }
}
