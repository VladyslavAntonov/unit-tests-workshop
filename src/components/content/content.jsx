import React from 'react';

import { useAsync } from '../../hooks';
import { PostsService } from '../../service';

import { ErrorPanel } from '../error-panel';
import { Posts } from '../posts';
import { Spinner } from '../spinner';

import * as styles from './content.module.scss';

export function Content() {
  const service = React.useContext(PostsService.context);

  const { status, data, execute } = useAsync(() => service.getAllPosts());

  React.useEffect(() => {
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
