// apiService.test.js - The test file
import axios from 'axios';
import { createUser, fetchUserData } from './apiService';

// Mock the axios module
jest.mock('axios');

describe('API Service', () => {
  // Reset mocks between tests
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('fetchUserData', () => {
    it('should fetch user data successfully', async () => {
      // Arrange
      const userId = '123';
      const mockData = { id: '123', name: 'John Doe', email: 'john@example.com' };
      axios.get.mockResolvedValueOnce({ data: mockData });

      // Act
      const result = await fetchUserData(userId);

      // Assert
      expect(axios.get).toHaveBeenCalledWith('https://api.example.com/users/123');
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(result).toEqual(mockData);
    });

    it('should throw an error when the API call fails', async () => {
      // Arrange
      const userId = '123';
      const errorMessage = 'Network Error';
      axios.get.mockRejectedValueOnce(new Error(errorMessage));

      // Act and Assert
      await expect(fetchUserData(userId)).rejects.toThrow(
        `Failed to fetch user data: ${errorMessage}`
      );
      expect(axios.get).toHaveBeenCalledWith('https://api.example.com/users/123');
      expect(axios.get).toHaveBeenCalledTimes(1);
    });
  });

  describe('createUser', () => {
    it('should create a user successfully', async () => {
      // Arrange
      const userData = { name: 'Jane Doe', email: 'jane@example.com' };
      const mockResponse = { id: '456', ...userData };
      axios.post.mockResolvedValueOnce({ data: mockResponse });

      // Act
      const result = await createUser(userData);

      // Assert
      expect(axios.post).toHaveBeenCalledWith('https://api.example.com/users', userData);
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(result).toEqual(mockResponse);
    });

    it('should throw an error when the user creation fails', async () => {
      // Arrange
      const userData = { name: 'Jane Doe', email: 'jane@example.com' };
      const errorMessage = 'Bad Request';
      axios.post.mockRejectedValueOnce(new Error(errorMessage));

      // Act and Assert
      await expect(createUser(userData)).rejects.toThrow(
        `Failed to create user: ${errorMessage}`
      );
      expect(axios.post).toHaveBeenCalledWith('https://api.example.com/users', userData);
      expect(axios.post).toHaveBeenCalledTimes(1);
    });
  });
});