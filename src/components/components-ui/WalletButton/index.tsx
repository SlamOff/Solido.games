import { useEffect, useState, useRef } from "react";
import { Provider, chain, createClient, defaultChains } from 'wagmi';
import {
  Account,
  Approve,
  Deposit,
  Withdraw,
  Repay,
  Borrow,
  Connect,
  NetworkSwitcher,
} from '../../../components';
import { useIsMounted } from '../../../hooks';
// import stripAddress from '../../helpers';
import WalletPopup from "../WalletPopup";

function WalletButton(props: any) {
  // const isMounted = useIsMounted();
  // const { data } = useAccount();
  const [ popupOpened, setPopupOpened ] = useState(false);

  const openPopup = () => {
    setPopupOpened(true);
  }

  const fn = (value: any) => {
    setPopupOpened(value);
  }

  return (
    <>
        <div className="wallet-btn">
          <button type="button" className="btn">
            <Connect />
          </button>
        </div>
        
        {/* <div className={popupOpened && !props.headerPos ? "wallet-popup-wrapper opened" : "wallet-popup-wrapper"}>
            <WalletPopup opened={fn} price={props.price} chain={props.chain} />
        </div>
        <div className={popupOpened && !props.headerPos ? "popup-overlay shown" : "popup-overlay"} onClick={fn.bind(null, false)}></div> */}
    </>
  );
}

export default WalletButton;
