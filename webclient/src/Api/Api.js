const baseUrl = 'http://localhost:3000';

const objectToQueryString = (obj) =>
  Object.keys(obj)
    .map((key) => key + '=' + obj[key])
    .join('&');

const generateErrorResponse = (message) => ({
  status: 'error',
  message,
});

async function request(path, params, method = 'GET') {
  // options passed to the fetch request

  const options = {
    method,
    headers: {
      'Content-Type': 'application/json', // we will be sending JSON
    },
  };

  // if params exists and method is GET, add query string to path
  // otherwise, just add params as a "body" property to the options object
  if (params) {
    if (method === 'GET') {
      path += '?' + objectToQueryString(params);
    } else {
      options.body = JSON.stringify(params); // body should match Content-Type in headers option
    }
  }

  const response = await fetch(baseUrl + path, options);

  // show an error if the status code is not 200
  if (response.status !== 200) {
    return generateErrorResponse(
      'The server responded with an unexpected status.',
    );
  }

  const result = await response.json();

  return result;
}

export const get = (path, params) => request(path, params);

export const create = (path, params) => request(path, params, 'POST');

export const update = (path, params) => request(path, params, 'PUT');

export const remove = (path, params) => request(path, params, 'DELETE');
