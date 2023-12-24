const apiUrl = 'https://jsonplaceholder.typicode.com/users';

export const fetchData = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.map(({ id, name, username }) => ({ id, name, username }));
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};