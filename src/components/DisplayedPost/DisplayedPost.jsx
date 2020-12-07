import React from 'react';
import PropTypes from 'prop-types';

export function DisplayedPost({ displayedPost }) {
  return (
    <div className="displayed-post">
      <h2>Post details</h2>
      <img src={displayedPost.image} alt="Dispayed post" />
      <p>
        {displayedPost.content}
      </p>
    </div>
  );
}

DisplayedPost.propTypes = {
  displayedPost: PropTypes.shape({
    image: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};
