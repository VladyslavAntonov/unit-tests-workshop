import { useEffect } from 'react';
import * as styles from './content.module.scss';

import { HttpService } from '../../service/http-service';
import { useAsync } from '../../hooks/use-async';

import { ErrorPanel } from '../error-panel';
import { Spinner } from '../spinner';
import { Posts } from '../posts';

const URL = 'https://jsonplaceholder.typicode.com/posts';

export function Content() {
  const service = new HttpService();

  const { status, data, execute } = useAsync(service.read(URL));

  useEffect(() => {
    execute();
  }, []);

  return (
    <section className={styles.content}>
      {status === 'loading' && (
        <Spinner />
      )}
      {status === 'error' && (
        <ErrorPanel
          text="Failed to fetch data"
          onRetry={execute}
        />
      )}
      {status === 'ready' && data !== null && (
        <Posts
          className={styles.posts}
          data={data.slice(0, 10)}
        />
      )}
    </section>
  );
}
