import { PostsService, URL } from './posts-service';

import { MockHttpService } from '../mocks/mock-http-service';

const mockService = new MockHttpService();

describe('PostsService', () => {
  let service;

  beforeEach(() => {
    service = new PostsService(mockService);
  });

  describe('getAllPosts', () => {
    let result;

    beforeEach(async () => {
      mockService.read.mockResolvedValueOnce('data');
      result = await service.getAllPosts();
    });

    it('calls the posts API', () => {
      expect(mockService.read).toHaveBeenCalledWith(URL);
    });

    it('returns the result', () => {
      expect(result).toBe('data');
    });
  });
});
