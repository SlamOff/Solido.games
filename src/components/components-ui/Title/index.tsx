import styles from './Title.module.scss';

export const Title = ({ text, subText, level, isLarge }: any) => {
  const Title = `h${level}`;
  return (
    // @ts-ignore: Object is possibly 'null'.
    <Title className={`${styles.title} ${isLarge ? styles.titleLarge : ''}`}>{text} {subText && <span style={{color: subText.color}}>{subText.text}</span>}</Title>
  );
}