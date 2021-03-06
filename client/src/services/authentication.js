import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3010',
  withCredentials: true
});

export const registerUser = (body) =>
  api.post('/authentication/sign-up', body).then((response) => response.data);

export const logInUser = (body) =>
  api.post('/authentication/sign-in', body).then((response) => response.data);

export const signOutUser = () =>
  api.post('/authentication/sign-out').then((response) => response.data);

export const loadUserInformation = () =>
  api.get('/authentication/me').then((response) => response.data);
