import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';

export function Post({ post, setDisplayedPost }) {
  return (
    <li className="post">
      <p>{post.content}</p>
      <button
        className="post__show-details-button"
        type="button"
        onClick={() => setDisplayedPost(post)}
      >
        Show post details
      </button>
    </li>
  );
}

Post.propTypes = {
  setDisplayedPost: PropTypes.func.isRequired,
  post: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }).isRequired,
};
