import axios from 'axios';

// Define an interface for API response data
interface ApiResponse {
  id: number;
  name: string;
  username: string;
  email: string;
}

// Function to fetch data from a dummy API
export const fetchData = async (): Promise<ApiResponse[]> => {
  try {
    const response = await axios.get<ApiResponse[]>('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Execute the function
fetchData().then(data => console.log(data));
