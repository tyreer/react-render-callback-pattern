import axios from 'axios';

export function getProfile(username) {
  return axios.get(`https://api.github.com/users/${username}`)
    .then(user => user.data);
}
