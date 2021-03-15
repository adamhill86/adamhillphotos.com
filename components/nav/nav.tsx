import Link from 'next/link';

import LinkTo from '../link-to/link-to';

import utilStyles from '../../styles/utils.module.scss';
import styles from './nav.module.scss';

export default function Nav(): JSX.Element {
  return (
    <nav className={styles.nav}>
      <div className={styles['logo-container']}>
        <Link href='/'>
          <a className={utilStyles.logo}>Adam Hill</a>
        </Link>
      </div>
      <div className={styles['desktop-links-container']}>
        <ul className={styles['link-list']}>
          <li>
            <LinkTo href='/gallery'>Gallery</LinkTo>
          </li>
          <li>
            <LinkTo href='/about'>About Me</LinkTo>
          </li>
          <li>
            <LinkTo href='/gear'>My Gear</LinkTo>
          </li>
          <li>
            <LinkTo href='/contact'>Contact Me</LinkTo>
          </li>
          <li>
            <LinkTo href='/blog'>Blog</LinkTo>
          </li>
        </ul>
      </div>
    </nav>
  );
}
