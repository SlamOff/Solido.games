import { useStoreApi } from "../../storeApi";
import { useState } from "react";
import useWeb3 from "../../useWeb3";
// import './index.css';
import stripAddress from '../../helpers'
import PurchaseButton from "../PurchaseButton";

function WalletPopup(props) {
  const  [isCorrectChain, setIsCorrectChain ] = useState(true);
  const { balance, message, address, setAddress, setBalance } = useStoreApi();
  const web3 = useWeb3();
  
  const disconnectWallet = async () => {
    window.location.reload();
  }

  const fn = value => {
    console.log(value)
    setIsCorrectChain(value);
  }

  return (
      <>
        <div className="wallet-popup">
            <div className="wallet-popup-header">
                <h6>CHECKOUT</h6>
                <button className="close-popup" onClick={() => {
                    props.opened(false);
                }}>
                    <svg viewBox="64 64 896 896" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
                </button>
            </div>
            <div className="wallet-popup-disconnect">
                <div className="avatar">
                    <svg viewBox="64 64 896 896" data-icon="user" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false"><path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path></svg>
                </div>
                <div className="wallet-address">
                    {stripAddress(address)}
                </div>
                <button className="btn-disconnect" onClick={disconnectWallet}>
                  <svg viewBox="64 64 896 896" data-icon="disconnect" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false"><path d="M832.6 191.4c-84.6-84.6-221.5-84.6-306 0l-96.9 96.9 51 51 96.9-96.9c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204l-96.9 96.9 51.1 51.1 96.9-96.9c84.4-84.6 84.4-221.5-.1-306.1zM446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l96.9-96.9-51.1-51.1-96.9 96.9c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l96.9-96.9-51-51-96.8 97zM260.3 209.4a8.03 8.03 0 0 0-11.3 0L209.4 249a8.03 8.03 0 0 0 0 11.3l554.4 554.4c3.1 3.1 8.2 3.1 11.3 0l39.6-39.6c3.1-3.1 3.1-8.2 0-11.3L260.3 209.4z"></path></svg>
                  <span>Disconnect</span>
                </button>
            </div>
            <div className="wallet-info">
              <p>Balance: {balance.toFixed(5)} {props.chain}</p>
              <p>Price: {props.price} {props.chain}</p>
              <p>Services Commission: 2.5%</p>
              <p>You will pay: {props.price + props.price / 100 * 2.5} {props.chain}</p>
            </div>
            <PurchaseButton name="Buy" price={props.price} isCorrectChainId={fn} />
            {!isCorrectChain ? (
              <p>Wrong chain! Please connect to BSC Testnet</p>
            ) : (
              ""
            )}
        </div>
    </>
  );
}

export default WalletPopup;
