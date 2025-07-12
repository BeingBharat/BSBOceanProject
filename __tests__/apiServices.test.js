import axios from 'axios';
import {} from '@testing-library/react-native';
import {fetchUserData, createUser} from '../apiServices';

jest.mock('axios');

describe('api Services test cases', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetch user test case', async () => {
    const mockData = {id: 123, user: 'bsb', email: 'bsbocean.tech.com'};

    axios.get.mockResolvedValueOnce({data: mockData});

    const result = await fetchUserData('123');

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('https://api.example.com/users/123');

    expect(result).toEqual(mockData);
  });

  it('fetch user error test case', () => {
    const mockError = 'Network Error';

    axios.get.mockRejectedValueOnce(new Error(mockError));

    const result = fetchUserData('123');

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('https://api.example.com/users/123');

    expect(result).rejects.toThrow('Failed to fetch user data: Network Error');
  });
});

describe('post data use cases', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('post data use case', async () => {
    const userData = {user: 'bsb', email: 'bsbocean.tech.com'};
    const mockData = {id: 123, ...userData};

    axios.post.mockResolvedValueOnce({data: mockData});

    const response = await createUser(userData);

    expect(response).toEqual(mockData);

    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(
      'https://api.example.com/users',
      userData,
    );
  });

  it('post data error use case', async () => {
    const userData = {user: 'bsb', email: 'bsbocean.tech.com'};

    axios.post.mockRejectedValueOnce(new Error('Network error'));

    await expect(createUser(userData)).rejects.toThrow(
      `Failed to create user: Network error`,
    );
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(
      'https://api.example.com/users',
      userData,
    );
  });
});
