const baseUrl = 'http://localhost:3000';

export const login = (request) => {
  fetch(`${baseUrl}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  }).then((response) => {
    return response.text();
  });
};

export const signup = (request) => {
  fetch(`${baseUrl}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  }).then((response) => {
    return response.text();
  });
};
