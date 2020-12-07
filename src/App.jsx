import React, { useState, useEffect } from 'react';
import { getUsers } from './api/users';
import './App.scss';
import './reset.scss';
import { UsersList } from './components/UsersList';

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
      <UsersList users={usersList} />
    </div>
  );
}
