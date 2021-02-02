import { HttpService } from './http-service';

const fetchSpy = jest.spyOn(global, 'fetch');
const mockUrl = 'url';

describe('HttpService', () => {
  let service;
  let resolve;

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
    let result;

    beforeEach(() => {
      fetchSpy.mockImplementationOnce(mockPromise);
      service.read(mockUrl);
    });

    it('fetches data from API', () => {
      expect(fetchSpy).toHaveBeenCalledWith(mockUrl);
    });

    // describe('when the response is not ok', () => {
    //   let error;

    //   beforeEach(async () => {
    //     try {
    //       await resolve({
    //         ok: false
    //       });
    //     } catch (e) {
    //       error = e;
    //     }
    //     // mockJson.mockResolvedValueOnce('data');
    //   });

    //   it('throws the error', () => {
    //     expect(error.message).toBe('data');
    //   });
    // });

    // describe('when the response is ok', () => {
    //   const mockJson = jest.fn(() => Promise.resolve('data'));

    //   beforeEach(async () => {
    //     // mockJson.mockResolvedValueOnce('data');
    //     await resolve({
    //       ok: true,
    //       json: mockJson
    //     });
    //   });

    //   it('', () => {
    //     expect(result).toBe('data');
    //   });
    // });
  });

  function mockPromise() {
    return new Promise((res, _) => {
      resolve = res;
    });
  }
});
