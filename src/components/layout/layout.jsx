import PropTypes from 'prop-types';

import { Footer } from '../footer';
import { Header } from '../header';

import * as styles from './layout.module.scss';

export function Layout(props) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
};
