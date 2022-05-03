import * as React from 'react';
import { useAccount } from 'wagmi';


import {
  Account,
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
  const isMounted = useIsMounted();
  const { data } = useAccount();

  return (
    <>
      {isMounted && data && (
        <>
          {/* <>
            <Connect />
            <Account />
            <NetworkSwitcher />
            <Approve />
            <Deposit />
            <Withdraw />
            <Repay />
            <Borrow />
          </> */}
        </>
      )}
    </>
  );
}

export default Page;
