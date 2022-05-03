import WalletButton from '../WalletButton';
import Image from 'next/image';
import styles from './Header.module.scss';
import logo from './img/logo.svg';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Header() {
  const router = useRouter();

  return (
    <>
      <header className={styles.header}>
        <Link href="/">
            <Image layout="raw" src={logo} alt="solido.games" className={styles.logo} />
        </Link>
        <nav>
          <Link href="/nft">NFT Marketplace</Link>
        </nav>
        {/* <WalletButton headerPos={true} /> */}
      </header>
    </>
  );
}

export default Header;