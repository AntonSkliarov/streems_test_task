import React from 'react';
import PropTypes from 'prop-types';
import './DisplayedPost.scss';

export const DisplayedPost = ({ displayedPost }) => (
  <div className="displayed-post">
    <h2 className="displayed-post__title">Post details</h2>
    <img
      className="displayed-post__iamge"
      src={displayedPost.image}
      alt="Dispayed post"
    />
    <p className="displayed-post__content">
      {displayedPost.content}
    </p>
  </div>
);

DisplayedPost.propTypes = {
  displayedPost: PropTypes.shape({
    image: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};
