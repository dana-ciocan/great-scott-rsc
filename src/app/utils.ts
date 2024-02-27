export const getData = async (endpoint: string) => {
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
