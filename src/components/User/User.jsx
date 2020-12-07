import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';
import { UserPosts } from '../UserPosts';

export function User({ user, userDetailsId, setUserDetailsId }) {
  return (
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
                  <p>{`Name: ${user.name}`}</p>
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
                <p>{`Name: ${user.name}`}</p>
                <p>{`Role: ${user.role}`}</p>
                <p>{`City: ${user.city}`}</p>
                <p>{`Phone: ${user.phone}`}</p>
              </div>

              <UserPosts userId={Number(user.id)} />
            </>
          )}

      </li>
    </div>
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
