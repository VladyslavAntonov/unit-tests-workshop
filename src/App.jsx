import { Layout, Content } from './components';
import { PostsService, HttpService } from './service';

const httpService = new HttpService();
const postsService = new PostsService(httpService);

function App() {
  return (
    <HttpService.context.Provider value={httpService}>
      <PostsService.context.Provider value={postsService}>
        <Layout>
          <Content />
        </Layout>
      </PostsService.context.Provider>
    </HttpService.context.Provider>
  );
}

export default App;
