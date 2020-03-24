import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     posts: []
  //   };
  // }
  // RIMOSSO E SPOSTATO NELLA ACTION
  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then(res => res.json())
  //     .then(posts => this.setState({ posts }));
  // }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { newPost, posts, darkMode } = this.props;
    return (
      <div className={`wrapper${darkMode ? " dark-mode" : ""}`}>
        <h1>Posts</h1>
        {newPost && (
          <div key={newPost.id}>
            <h3>{newPost.title}</h3>
            <p>{newPost.body}</p>
          </div>
        )}
        {posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.postReducer.items,
  newPost: state.postReducer.item,
  darkMode: state.uiReducer.darkMode
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
