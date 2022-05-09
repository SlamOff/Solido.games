import styles from './Dropdown.module.scss';
import Link from 'next/link';
import { Connect } from '../../Connect';

const Dropdown = ({ itemsList, isRightPositioned, type }: any) => {

    return (
        <>
            <ul className={`${styles.dropdown} ${isRightPositioned ? styles.dropdownRight : ''}`}>
                {type == 'wallet' ? <Connect /> : itemsList.map((item: any) => {
                    return (
                        <div key={item.id}>
                            <li className={styles.dropdownItem}>
                                {item.isBlank ? <a href={item.link} target='_blank'>{item.name}</a> : <Link href={item.link}>{item.name}</Link>}
                                
                            </li>
                            {item.divider && <div className={styles.dropdownDivider}></div>}
                        </div>
                    )
                })}
            </ul>
        </>
    );
}

export default Dropdown;