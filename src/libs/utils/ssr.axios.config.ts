'use server';
import axios from 'axios';
export const ssrApiManager = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });