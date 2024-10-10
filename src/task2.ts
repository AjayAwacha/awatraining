import axios from 'axios';

interface ApiResponse {
  id: number;
  name: string;
}

const fetchApi1 = async (): Promise<ApiResponse[]> => {
  const response = await axios.get<ApiResponse[]>('https://jsonplaceholder.typicode.com/users');
  return response.data;
};

const fetchApi2 = async (): Promise<ApiResponse[]> => {
  const response = await axios.get<ApiResponse[]>('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

const fetchDataInParallel = async (): Promise<void> => {
  try {
    const [api1Data, api2Data] = await Promise.all([fetchApi1(), fetchApi2()]);
    console.log('API 1 Data:', api1Data);
    console.log('API 2 Data:', api2Data);
  } catch (error) {
    console.error('Error:', error);
  }
};

fetchDataInParallel();
