import * as React from 'react';
import { useAccount } from 'wagmi';
import { Title } from '../components/components-ui/Title';

import {
  Approve,
  Deposit,
  Withdraw,
  Repay,
  Borrow,
  Connect,
  NetworkSwitcher,
} from '../components';
import { useIsMounted } from '../hooks';

function Page() {
  // const isMounted = useIsMounted();
  // const { data } = useAccount();

  return (
    <>
      <div className='container'>
        <Title text='Home Page' level={1} />
      </div>
      {/* {isMounted && data && (
        <>
          <>
            <Connect />
            <Account />
            <NetworkSwitcher />
            <Approve />
            <Deposit />
            <Withdraw />
            <Repay />
            <Borrow />
          </>
        </>
      )} */}
    </>
  );
}

export default Page;
