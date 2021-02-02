import classNames from 'classnames';
import PropTypes from 'prop-types';

import * as styles from './button.module.scss';

export function Button(props) {
  return (
    <button
      className={classNames(styles.button, props.className)}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};
