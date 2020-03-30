import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";

class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { title, body } = this.state;
    const post = {
      title,
      body
    };

    //RIMOSSO E MESSO NELLA ACTION
    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8"
    //   },
    //   body: JSON.stringify(post)
    // })
    //   .then(res => res.json())
    //   .then(post => console.log(post));

    this.props.createPost(post);
  };

  render() {
    const { title, body } = this.state;
    const { darkMode } = this.props;
    return (
      <div className={`wrapper${darkMode ? " dark-mode" : ""}`}>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={title}
            />
          </div>
          <br />
          <div>
            <label>Body: </label>
            <br />
            <textarea name="body" value={body} onChange={this.onChange} />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ uiReducer }) => ({
  darkMode: uiReducer.darkMode
});

export default connect(mapStateToProps, { createPost })(Postform);
