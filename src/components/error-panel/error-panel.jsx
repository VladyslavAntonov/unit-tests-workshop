import PropTypes from 'prop-types';

import { Button } from '../button';

import styles from './error-panel.module.scss';

export function ErrorPanel(props) {
  return (
    <div className={styles['error-panel']}>
      <span>
        Error: {props.text}
      </span>
      <Button
        className={styles.button}
        onClick={props.onRetry}
      >
        Retry
      </Button>
    </div>
  );
}

ErrorPanel.propTypes = {
  onRetry: PropTypes.func,
  text: PropTypes.string.isRequired,
};
