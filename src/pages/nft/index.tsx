import * as React from 'react';
import styles from './NFT.module.scss';
import NFTItem from '../../components/components-ui/NFTItem';
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

const Page = ({nfts}: any) => {
  return (
    <>
      <div className='container'>
        <h1>Game NFT Marketplace</h1>
        <h2> Collection</h2>
        <div className={'row ' + styles.list}>
          {nfts && nfts.map((item: any) => (
            <Link href={`/nft/${item.id}`} key={item.id}>
              <div className='col-md-3'>
                <NFTItem nft={item} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Page;