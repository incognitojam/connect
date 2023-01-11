const fetcher = async (input: RequestInfo | URL, init?: RequestInit) => {
  const headers = {
    Authorization: 'JWT ' + localStorage.getItem('authorization'),
  };
  return fetch(input, { ...init, headers })
    .then((res) => res.json());
};

export default fetcher;
