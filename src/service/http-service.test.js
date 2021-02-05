import { HttpService } from './http-service';

const mockUrl = 'url';

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
      const promise = new Promise((res) => {
        resolve = res;
      });
      fetchSpy.mockReturnValueOnce(promise);
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
});
