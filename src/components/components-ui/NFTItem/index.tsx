import styles from './NFTItem.module.scss';
import pict from './item-1.png';
import Image from 'next/image';
import { useContractWrite } from 'wagmi';
import solidoCards from '../../../contract/SolidoCards.json';
import { utils } from "ethers";
import { Title } from '../Title';
import { Button } from '../Button';

const NftItem = ({nft, isSinglePage}: any) => {

  const { title, id } = nft;
  let wei = utils.parseEther(0.02.toString());
  
  const { data, isError, isLoading, write: mint } = useContractWrite(
    {
      addressOrName: '0xFCAc1201575A1C482Fa982C066f57DB91f29DF85',
      contractInterface: solidoCards.abi,
    },
    'mint',
    {
      args: [1, 1]
    },
  )

  const _mint = async () => {
    console.log('MINT!')
    mint();
  }

  return (
    <>
      {isSinglePage ? (
        <div className={styles.itemSingle}>
          <div className='container'>
            <Title text={title} subText={{text: `#${id}`, color: '#6c757d'}} level={1} />
            <div className='row'>
              <div className='col-sm-6 col-lg-5'>
                <Image layout='raw' src={pict} alt='solido.games nft' />
              </div>
              <div className='col-sm-6'>
                <p>Current price</p>
                <span className={styles.price}>0.02 BNB</span>
                <Button
                  text='Buy now'
                  location='nft-single'
                  btnType='btnPrimary' />
              </div>
            </div>
          </div>
          
        </div>
      ) : (
        <div className={styles.item}>
          <Image layout='raw' src={pict} alt='solido.games nft' />
          <div className={styles.info}>
              <Title text={title} level={3} />
              <Title text='MASD' level={4} />
              <div className={styles.status}>
                <span className={styles.label}>Verified</span>
                <span className={`${styles.label} ${styles.id}`}>#{id}</span>
              </div>
              <Button
                text='0.02 BNB'
                location='nft-list'
                btnType='btnPrimary' />
          </div>
        </div>
      )}
    </>
  );
}
  
export default NftItem;