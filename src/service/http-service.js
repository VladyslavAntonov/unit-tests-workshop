import { createContext } from 'react';

const defaultOptions = { 'Content-type': 'application/json; charset=UTF-8' };

export class HttpService {
  static context = createContext();

  async create(url, body) {
    return await execute(fetch(url, {
      body,
      headers: defaultOptions,
      method: 'POST'
    }));
  }

  async read(url) {
    return await execute(fetch(url));
  }

  async update(url, body) {
    return await execute(fetch(url, {
      body,
      headers: defaultOptions,
      method: 'PUT'
    }));
  }

  async delete(url) {
    return await execute(fetch(url,
        { method: 'DELETE' }
    ));
  }
}

async function execute(request) {
  const response = await request;

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  console.log(response);

  return await response.json();
}
