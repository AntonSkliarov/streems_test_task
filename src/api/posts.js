import { BASE_URL } from './api';

// const options = {
//   method: 'GET',
//   headers: {
//     'Access-Control-Allow-Origin': 'https://.mockapi.io/api',
//   },
// };

export async function getPosts(userId) {
  const response = await fetch(`${BASE_URL}/users/${userId}/posts`);
  const result = await response.json();

  return result;
}
