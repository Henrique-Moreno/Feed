// styles
import styles from './Header.module.css';

// components
import feedLogo from '../assets/feed-logo.svg';

export default function Header() {
  return (
  <header className={styles.header}>
    <img src={feedLogo} alt="logo tipo do feed" />
    <strong>Feed</strong>
  </header>
  )
}
