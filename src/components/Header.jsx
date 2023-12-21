import styles from './Header.module.css';

import feedLogo from '../assets/feed-logo.svg';

console.log(feedLogo)

export default function Header() {
  return (
  <header className={styles.header}>
    <img src={feedLogo} alt="logo tipo do feed" />
    <strong>Feed</strong>
  </header>
  )
}
