import { useState } from 'react';
import { RefreshIcon } from '../icons';

import { formatDate } from '../../helpers/format-date';

import { Button } from '../button';

import * as styles from './header.module.scss';

export function Header() {
  const [date] = useState(() => new Date());

  return (
    <header className={styles.header}>
      <Button onClick={reload}>
        <RefreshIcon />
      </Button>
      <div
        className={styles['header__title']}
        data-test-id="header-title"
      >
        Unit Tests
      </div>
      <div
        className={styles['header__date']}
        data-test-id="header-date"
      >
        {formatDate(date)}
      </div>
    </header>
  );
}

function reload() {
  window.location.reload();
}
