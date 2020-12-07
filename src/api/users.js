import { BASE_URL } from './api';

export async function getUsers() {
  const response = await fetch(`${BASE_URL}/users`);
  const result = await response.json();

  const formatedUsers = result.map(user => (
    {
      ...user,
      id: Number(user.id),
    }
  ));

  return formatedUsers;
}
