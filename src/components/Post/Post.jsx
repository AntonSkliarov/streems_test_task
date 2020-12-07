import React from 'react';
import PropTypes from 'prop-types';

export function Post({ post }) {
  return (
    <li>
      <p>{post.content}</p>
    </li>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }).isRequired,
};
