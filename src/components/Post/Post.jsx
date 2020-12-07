import React, { useCallback } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Post.scss';

export function Post({ post, setDisplayedPost, postId }) {
  const showDetails = useCallback(() => (
    setDisplayedPost(post)
  ));

  return (
    <li className="post">
      <p className="post__content">
        {post.content}
      </p>
      <button
        className={classNames('post__show-details-button', {
          'post__show-details-button--active': post.id === postId,
        })}
        type="button"
        onClick={showDetails}
      >
        Show details
      </button>
    </li>
  );
}

Post.propTypes = {
  postId: PropTypes.number.isRequired,
  setDisplayedPost: PropTypes.func.isRequired,
  post: PropTypes.shape({
    content: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
