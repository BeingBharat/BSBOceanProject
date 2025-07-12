
// apiService.js - The module we want to test
import axios from 'axios';

export const fetchUserData = async (userId) => {
  try {
    const response = await axios.get(`https://api.example.com/users/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch user data: ${error.message}`);
  }
};

export const createUser = async (userData) => {
  try {
    const response = await axios.post('https://api.example.com/users', userData);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to create user: ${error.message}`);
  }
};
