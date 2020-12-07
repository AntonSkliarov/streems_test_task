import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import './UsersList.scss';

export function UsersList({ users }) {
  const [userDetailsId, setUserDetailsId] = useState(0);

  return (
    <div className="users">
      <h1 className="users__title">Users List</h1>
      <ul className="users-list">
        {users.map(user => (
          <User
            user={user}
            key={user.id}
            userDetailsId={userDetailsId}
            setUserDetailsId={setUserDetailsId}
          />
        ))}
      </ul>
    </div>
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
