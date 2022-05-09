import * as React from 'react';
import styles from './NFT.module.scss';
import { Title } from '../components/components-ui/Title';
import Link from 'next/link';

function PrivacyPolicy() {

  return (
    <>
      <div className='container'>
        <Title text='Privacy Policy Page' level={1} />
      </div>
    </>
  );
}

export default PrivacyPolicy;