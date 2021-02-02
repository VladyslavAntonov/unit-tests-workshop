import { createContext } from 'react';

export const URL = 'https://jsonplaceholder.typicode.com/posts';

export class PostsService {
    static context = createContext();

    constructor(httpService) {
      this.httpService = httpService;
    }

    async getAllPosts() {
      return await this.httpService.read(URL);
    }
}
