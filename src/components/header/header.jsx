import Icon from '@material-ui/icons/Refresh';
import { useState } from 'react';

import { formatDate } from '../../helpers/format-date';

import { Button } from '../button';

import * as styles from './header.module.scss';

export function Header() {
  const [date] = useState(() => new Date());

  return (
    <header className={styles.header}>
      <Button onClick={reload}>
        <Icon />
      </Button>
      <div className={styles['header__title']}>
        Unit Tests
      </div>
      <div className={styles['header__date']}>
        {formatDate(date)}
      </div>
    </header>
  );
}

function reload() {
  window.location.reload();
}
