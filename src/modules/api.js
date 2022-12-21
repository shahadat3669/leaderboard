const gameId = 'VMhOOqVVQvAkTf1NZgzA';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;

const getData = async () => {
  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  return response.json();
};

export { getData };
