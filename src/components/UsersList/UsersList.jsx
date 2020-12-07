import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import './UsersList.scss';

export function UsersList({ users }) {
  return (
    <ul className="usersList">
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </ul>
  );
}

UsersList.propTypes = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
).isRequired;
