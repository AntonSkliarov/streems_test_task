import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';

export function Post({ post }) {
  return (
    <li className="post">
      <button className="post__show-details-button" type="button">
        Show post details
      </button>
    </li>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }).isRequired,
};
