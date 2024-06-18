import axios from 'axios';
import { Component } from 'react';
import { Link } from 'react-router-dom';

import Loader from 'components/Loader/Loader';
import css from './PostsPage.module.css';

export class HomePage extends Component {
  state = {
    posts: null,
    comments: null,
    selectedPostId: null,
    isLoading: false,
    error: null,
  };

  fetchPosts = async () => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      this.setState({ posts: data });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  fetchPostsComments = async () => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${this.state.selectedPostId}`
      );
      this.setState({ comments: data });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onSelectPostId = postId => {
    this.setState({ selectedPostId: postId });
  };

  componentDidMount() {
    this.fetchPosts();
  }

  componentDidUpdate(_, prevState) {
    if (prevState.selectedPostId !== this.state.selectedPostId) {
      this.fetchPostsComments();
    }
  }

  render() {
    return (
      <div className={css.container}>
        <h1>HTTP-request</h1>
        {this.state.error !== null && (
          <p className={css.errorBage}>
            Oops, some error occured... Error message: {this.state.error}
          </p>
        )}
        {this.state.isLoading && <Loader />}
        <div className={css.listWrapper}>
          <ul className={css.postList}>
            {this.state.posts !== null &&
              this.state.posts.map(post => (
                <li
                  key={post.id}
                  // onClick={() => this.onSelectPostId(post.id)}
                  className={css.postListItem}
                >
                  <Link to={`/posts/${post.id}`}>
                    <h2 className={css.itemTitle}>{post.title}</h2>
                    <p className={css.itemBody}>
                      <b>Body: </b>
                      {post.body}
                    </p>
                  </Link>
                </li>
              ))}
          </ul>

          <ul className={css.commentsList}>
            {this.state.selectedPostId && (
              <li className={css.commentsListItem}>
                Selected post id: {this.state.selectedPostId}
              </li>
            )}
            {!this.state.isLoading &&
              this.state.comments !== null &&
              this.state.comments.map(comment => (
                <li key={comment.id} className={css.commentsListItem}>
                  <h2 className={css.commentTitle}>{comment.name}</h2>
                  <h3 className={css.commentEmail}>Email: {comment.email}</h3>
                  <p className={css.commentBody}>
                    <b>Body: </b>
                    {comment.body}
                  </p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default HomePage;
