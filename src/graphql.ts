import axios from 'axios';

const query = `
  query {
    getItems {
      customerId
      orderId
    }
  }
`;

export const handler = async () => {
  const response = await axios.post('https://your-appsync-api-url', {
    query,
  });
  console.log(response.data);
};
