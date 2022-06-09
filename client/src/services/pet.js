import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3010' });

export const listPets = () =>
  api.get('/pet/list').then((response) => response.data);

export const loadPet = (id) =>
  api.get(`/pet/${id}`).then((response) => response.data);

export const editPet = (id, pet) =>
  api.patch(`/pet/${id}`, pet).then((response) => response.data);

export const deletePet = (id) =>
  api.delete(`/pet/${id}`).then((response) => response.data);

export const createPet = (pet) =>
  api.post('/pet', pet).then((response) => response.data);
