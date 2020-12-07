import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './User.scss';
import { UserPosts } from '../UserPosts';
import { DisplayedPost } from '../DisplayedPost/DisplayedPost';

export function User({ user, userDetailsId, setUserDetailsId }) {
  const [displayedPost, setDisplayedPost] = useState({});

  return (
    <>
      <div className="user" key={user.id}>
        <li className="user__item">
          {userDetailsId !== user.id
            ? (
              <div className="user__preview">
                <button
                  className="user__details-button"
                  type="button"
                  onClick={() => setUserDetailsId(user.id)}
                >
                  <div>
                    <img
                      className="user__preview-avatar"
                      src={user.avatar}
                      alt="User avatar"
                    />
                    <p className="user__preview-name">{user.name}</p>
                  </div>
                </button>
              </div>
            )
            : (
              <>
                <div className="user__details">
                  <img
                    className="user__avatar"
                    src={user.avatar}
                    alt="User avatar"
                  />
                  <p>
                    <span className="user__details-name">Name: </span>
                    {user.name}
                  </p>

                  <p>
                    <span className="user__details-role">Role: </span>
                    {user.role}
                  </p>

                  <p>
                    <span className="user__details-city">City: </span>
                    {user.city}
                  </p>

                  <p>
                    <span className="user__details-phone">Phone: </span>
                    {user.phone}
                  </p>
                </div>

                <UserPosts
                  userId={Number(user.id)}
                  setDisplayedPost={setDisplayedPost}
                  postId={displayedPost.id}
                />

              </>
            )}

        </li>
      </div>

      {displayedPost.userId === userDetailsId && (
        <DisplayedPost displayedPost={displayedPost} />
      )}
    </>
  );
}

User.propTypes = {
  setUserDetailsId: PropTypes.func.isRequired,
  userDetailsId: PropTypes.number.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
