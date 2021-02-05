import { HttpService, defaultOptions } from './http-service';

const mockUrl = 'url';
const mockBody = 'body';

describe('HttpService', () => {
  let service;
  let fetchSpy;

  beforeAll(() => {
    fetchSpy = jest.spyOn(global, 'fetch');
  });

  beforeEach(() => {
    service = new HttpService();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  describe('read', () => {
    let resolve;
    let error;
    let request;

    beforeEach(() => {
      resolve = mockFetch();
      request = service.read(mockUrl)
          .catch((e) => (error = e));
    });

    it('fetches data from API', () => {
      expect(fetchSpy).toHaveBeenCalledWith(mockUrl);
    });

    describe('when the response is not ok', () => {
      beforeEach(async () => {
        await resolve({
          ok: false,
          status: 404
        });
      });

      it('throws the error', () => {
        expect(error.message).toBe('An error has occured: 404');
      });
    });

    describe('when the response is ok', () => {
      let result;

      beforeEach(async () => {
        await resolve({
          ok: true,
          json: () => Promise.resolve('data')
        });
        result = await request;
      });

      it('returns resolved data', () => {
        expect(result).toBe('data');
      });
    });
  });

  describe('create', () => {
    let error;
    let request;
    let resolve;

    beforeEach(() => {
      resolve = mockFetch();
      request = service.create(mockUrl, mockBody)
          .catch((e) => (error = e));
    });

    it('fetches data from API with provided body using POST method', () => {
      expect(fetchSpy).toHaveBeenCalledWith(mockUrl, {
        body: mockBody,
        headers: defaultOptions,
        method: 'POST'
      });
    });

    describe('when the response is not ok', () => {
      beforeEach(async () => {
        await resolve({
          ok: false,
          status: 404
        });
      });

      it('throws the error', () => {
        expect(error.message).toBe('An error has occured: 404');
      });
    });

    describe('when the response is ok', () => {
      let result;

      beforeEach(async () => {
        await resolve({
          ok: true,
          json: () => Promise.resolve('data')
        });
        result = await request;
      });

      it('returns resolved data', () => {
        expect(result).toBe('data');
      });
    });
  });

  describe('update', () => {
    let error;
    let request;
    let resolve;

    beforeEach(() => {
      resolve = mockFetch();
      request = service.update(mockUrl, mockBody)
          .catch((e) => (error = e));
    });

    it('fetches data from API with provided body using PUT method', () => {
      expect(fetchSpy).toHaveBeenCalledWith(mockUrl, {
        body: mockBody,
        headers: defaultOptions,
        method: 'PUT'
      });
    });

    describe('when the response is not ok', () => {
      beforeEach(async () => {
        await resolve({
          ok: false,
          status: 404
        });
      });

      it('throws the error', () => {
        expect(error.message).toBe('An error has occured: 404');
      });
    });

    describe('when the response is ok', () => {
      let result;

      beforeEach(async () => {
        await resolve({
          ok: true,
          json: () => Promise.resolve('data')
        });
        result = await request;
      });

      it('returns resolved data', () => {
        expect(result).toBe('data');
      });
    });
  });

  describe('delete', () => {
    let error;
    let request;
    let resolve;

    beforeEach(() => {
      resolve = mockFetch();
      request = service.delete(mockUrl)
          .catch((e) => (error = e));
    });

    it('fetches data from API using DELETE method', () => {
      expect(fetchSpy).toHaveBeenCalledWith(mockUrl, {
        method: 'DELETE'
      });
    });

    describe('when the response is not ok', () => {
      beforeEach(async () => {
        await resolve({
          ok: false,
          status: 404
        });
      });

      it('throws the error', () => {
        expect(error.message).toBe('An error has occured: 404');
      });
    });

    describe('when the response is ok', () => {
      let result;

      beforeEach(async () => {
        await resolve({
          ok: true,
          json: () => Promise.resolve('data')
        });
        result = await request;
      });

      it('returns resolved data', () => {
        expect(result).toBe('data');
      });
    });
  });

  function mockFetch() {
    let resolve;

    fetchSpy.mockReturnValueOnce(
        new Promise((res) => {
          resolve = res;
        })
    );

    return resolve;
  }
});
