import styles from './NFTItem.module.scss';
import pict from './item-1.png';
import Image from 'next/image';
import WalletButton from '../WalletButton';
import { useAccount } from 'wagmi';

const NftItem = ({nft}: any) => {
    const { title } = nft;

    return (
      <>
        <div className={styles.item}>
            <Image layout='raw' src={pict} alt='solido.games nft' />
            <div className={styles.info}>
                <h3>{title}</h3>
                <p>MASD</p>
                <WalletButton price={20} chain={'BNB'} />
            </div>
        </div>
      </>
    );
  }
  
  export default NftItem;