import * as React from 'react';
import styles from './NFT.module.scss';
import NFTItem from '../../components/components-ui/NFTItem';
import { Title } from '../../components/components-ui/Title';
import Link from 'next/link';

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const data = await response.json();
  data.length = 10;

  if(!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      nfts: data
    }
  }
};

const NFTPage = ({nfts}: any) => {
  return (
    <>
      <div className='container'>
        <Title text='Game NFT Marketplace' level={1} />
        <Title text='MASD Collection' level={2} />
        <div className={'row ' + styles.list}>
          {nfts && nfts.map((item: any) => (
            <Link href={`/nft/${item.id}`} key={item.id}>
              <div className='col-sm-6 col-md-4 col-lg-3'>
                <NFTItem nft={item} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default NFTPage;