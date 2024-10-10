import { fetchData } from './task1'; // Assuming your API call is in `api.ts`

test('fetchData should return an array of users', async () => {
  const data = await fetchData();
  expect(data).toBeDefined();
  expect(data.length).toBeGreaterThan(0);
});
