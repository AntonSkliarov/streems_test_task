import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';
// import { getPosts } from '../../api/posts';
import { UserPosts } from '../UserPosts';

export function User({ user }) {
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
        <UserPosts userId={Number(user.id)} />
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
