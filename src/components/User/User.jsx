import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import './User.scss';
import { getPosts } from '../../api/posts';

export function User({ user }) {
  const [userPosts, setUserPosts] = useState([]);

  const showUserPosts = useCallback((userId) => {
    async function fetchData() {
      const requestedPosts = await getPosts(userId);

      setUserPosts(requestedPosts);
    }

    fetchData();
  }, []);

  return (
    <div className="userCard" key={user.id}>
      <li className="userItem">
        <div className="userInfo">
          <img
            className="userAvatar"
            src={user.avatar}
            alt="User avatar"
          />
          <p>{`Name: ${user.name}`}</p>
          <p>{`Role: ${user.role}`}</p>
          <p>{`City: ${user.city}`}</p>
          <p>{`Phone: ${user.phone}`}</p>
        </div>
        <div className="userPosts">
          <button type="button" onClick={() => showUserPosts(user.id)}>
            Show user posts
          </button>
          <ul>
            {userPosts.map(post => (
              <li>
                <p>{post.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </li>
    </div>
  );
}

User.propTypes = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
).isRequired;
