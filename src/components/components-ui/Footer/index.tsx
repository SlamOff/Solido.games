import styles from './Footer.module.scss';
import { Title } from '../Title';
import { Form } from '../Form';
import Link from 'next/link';
import { dropdownData } from '../../../scripts/header-nav-dropdown';
import Image from 'next/image';
import img from '../../../img/discord.svg';

export const Footer = () => {
    const getYear = () => {
        return new Date().getFullYear();
    }

    return (
      <>
        <footer className={styles.footer}>
            <div className='container'>
                <Title text='Solido.games' level={6} isLarge={true} />
                <Title text='Stay up to date!' level={2} />
                <div className='row'>
                    <div className='col-md-7'>
                        <Form
                            formData={{
                                action: '/subscription-add',
                                method: 'POST'
                            }}
                            buttonText='Keep me informed'
                            inputs={[
                            {
                                id: 1,
                                required: true,
                                name: 'subscription',
                                placeholder: 'Your e-mail for whitelist & updates'
                            }
                        ]} />
                        <p className={styles.privacy}>By clicking the button you agree to our <Link href='/privacypolicy'>Privacy Policy</Link></p>
                        
                    </div>
                    <div className='col-md-5'>
                        <ul className={styles.links}>
                            <li><a href="https://app.solido.games/files/solido.games_whitepaper_v18.pdf">Whitepaper</a></li>
                            <li><a href="https://litepaper.solido.games/">Litepaper</a></li>
                            <li><a href="https://app.solido.games/files/solido.games_onepager.pdf">Onepager</a></li>
                        </ul>
                        <ul className={styles.links}>
                            <li><a href="https://app.solido.games/files/solido.games_pitch.pdf">Pitch Deck</a></li>
                            <li><Link href="/">Home</Link></li>
                            <li><a href="mailto:info@solido.games">info@solido.games</a></li>
                        </ul>
                    </div>
                </div>
                <div className={`row ${styles.rowFlex}`}>
                    <div className='col-lg-7 col-md-6'>
                        <p className={styles.reserved}>Solido.games © All Rights Reserved. {getYear()}</p>
                    </div>
                    <div className='col-lg-5 col-md-6'>
                        <div className={styles.socials}>
                            {dropdownData.socials.map((item) => {
                                if(item.img) return <a key={item.id} href={item.link} target="_blank"><Image layout="raw" width={item.name == 'Telegram chat' ? 100 : 57} height={57} src={`/../../../img/${item.img}`} alt="solido.games" className={styles.icon} /></a>;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
      </>
    );
}

export default Footer;
