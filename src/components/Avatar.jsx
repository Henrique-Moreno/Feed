import styles from './Avatar.module.css';

export default function Avatar({ hasBorder = true, src}) { // melhor do que colocar props ja coloca o valor

  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}
