import React, { useState, useEffect } from 'react';
import { getUsers } from './api/users';
import './App.scss';

export function App() {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requestedUsers = await getUsers();

      setUsersList(requestedUsers);
    }

    fetchData();
  }, []);

  return (
    <div>
      <ul className="usersList">
        {usersList.map(user => (
          <div className="userCard" key={user.id}>
            <li className="userItem">
              <div className="userInfo">
                <img src={user.avatar} alt="User avatar" />
                <p>{`Name: ${user.name}`}</p>
                <p>{`Role: ${user.name}`}</p>
                <p>{`City: ${user.name}`}</p>
                <p>{`Phone: ${user.name}`}</p>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
