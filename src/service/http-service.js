const defaultOptions = { 'Content-type': 'application/json; charset=UTF-8' };

export class HttpService {
  constructor() {
    this.create = async (url, body) =>
      await execute(fetch(url, {
        body,
        headers: defaultOptions,
        method: 'POST',
      }));

    this.read = async (url) =>
      await execute(fetch(url));

    this.update = async (url) =>
      await execute(fetch(url, {
        body,
        headers: defaultOptions,
        method: 'PUT',
      }));

    this.delete = async (url) =>
      await execute(fetch(url,
          { method: 'DELETE' },
      ));

    async function execute(request) {
      const response = await request;

      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }

      return await response.json();
    }
  }
}
