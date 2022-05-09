import * as React from 'react';
import styles from './NFT.module.scss';
import { Title } from '../components/components-ui/Title';
import Link from 'next/link';

function NotFound() {

  return (
    <>
      <div className='container'>
        <Title text='404 Page' level={1} />
      </div>
    </>
  );
}

export default NotFound;