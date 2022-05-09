import styles from './Button.module.scss';

export const Button = ({ location, text, clickEvent, pending, btnType }: any) => {
  return (
        <button className={`${styles.btn} ${styles[btnType]} ${location == 'dropdown' ? styles.btnDropdown : ''} ${location == 'form' ? styles.btnForm : ''} ${location == 'nft-list' ? styles.btnNftList : ''}`}>
            {pending ? 'Connecting...' : text}
        </button>
    );
}