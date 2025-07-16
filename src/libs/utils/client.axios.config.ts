import axios from 'axios';
export const clientApiManager = axios.create({
    baseURL:' https://6831b60f6205ab0d6c3d568c.mockapi.io/Users',
    headers: {
      'Content-Type': 'application/json',
    },
  });