import { BASE_URL } from './api';

export async function getPosts(userId) {
  const response = await fetch(`${BASE_URL}/users/${userId}/posts`);
  const result = await response.json();

  return result;
}
