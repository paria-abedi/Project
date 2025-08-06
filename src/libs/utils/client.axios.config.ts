import axios from 'axios';
export const clientApiManager = axios.create({
    baseURL:' https://6831b60f6205ab0d6c3d568c.mockapi.io/Users',
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const clientApi = axios.create({
    baseURL:'https://68905f24944bf437b595a605.mockapi.io/',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  