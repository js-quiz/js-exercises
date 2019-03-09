import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import styles from './Header.css';
import grid from '../Grid/Grid.css';

type IProps = {
  current: string;
  total: string;
}

const Header: React.FC<IProps> = ({ current, total }) => (
  <header>
    <div className={grid.container}>
      <nav className={`${bootstrap.navbar} ${styles['navbar_no-padding']}`}>
        <Link to="/" className={bootstrap['navbar-brand']}>JavaScript Quiz</Link>
        <span className={bootstrap['navbar-text']}>
          {current}
          {' of '}
          {total}
        </span>
      </nav>
    </div>
  </header>
);

export default memo(Header);
