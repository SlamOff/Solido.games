import { useEffect, useRef, useState } from "react";
// import { useStoreApi } from "../../storeApi";
// import useWeb3 from "../../useWeb3";
// import WalletButton from "../WalletButton";
// import abi from  '../../contracts/abi.json';
// import solc from ('solc');

function PurchaseButton(props) {
  //console.log(MockMASDNFT);
  const CHAIN_ID = 97; 
  //const binance = window.BinanceChain;
  const [ buyPopupOpened, setBuyPopupOpened ] = useState(false);
  const [ isCorrectChain, setIsCorrectChain ] = useState(false);
  const { balance, message, address, setBalance } = useStoreApi();
  const web3 = useWeb3();
  const { name, price } = props;
  const recipient = '0xC9185Abaf0a9Bc31575953BbD78eDEdFd7084C4C';

  const updateBalance = async fromAddress => {
    await web3.eth.getBalance(fromAddress).then(value => {
      setBalance(parseFloat(web3.utils.fromWei(value, "ether")));
    });
  };

  const checkChain = callback => {
    web3.eth.getChainId().then(chainID => {
        if(chainID === CHAIN_ID) {
            setIsCorrectChain(true);
            callback();
        } else {
            setIsCorrectChain(false);
        }
    });
  };

  const mintWithTokenURI = async hash => {
    const address = '0xCD18a0955d912aDb649a6ce538b1376c4A60177d';
    const contract = new web3.eth.Contract(abi, address);
    // const accounts = await window.ethereum.enable();
    await contract.methods.balanceOf(recipient).call().then((data) => {
      console.log(data);
      console.log(parseFloat(web3.utils.fromWei(data, "ether")));
    });
    await contract.methods.mintWithTokenURI('bafkreihpoomxw4nwar3nfoo3il2nax3i5bcomoqmmjlsnms6mtasupqsj4').call().then((data) => {
      console.log(data);
    });
    await web3.eth.getAccounts().then( async accounts => {
      console.log(accounts);
    });
    // contract.methods._setTokenURI(recipient).call().then(data => {
    //   console.log(data);
    // });
    // console.log(contract)
    
    //sendTransaction(hash);
    // bafkreihpoomxw4nwar3nfoo3il2nax3i5bcomoqmmjlsnms6mtasupqsj4
  }

  

  // const sendTransaction = hash => {
  //   const priceStr = price + "";
  //   web3.eth.sendTransaction({
  //       from: address,
  //       to: recipient,
  //       value: web3.utils.toWei(priceStr, "ether")
  //   });
  //   updateBalance(address);
  //   setBuyPopupOpened(false);
    
  //   //console.log(binance.isConnected());
  //   console.log(web3.eth.getChainId());
  // };

  useEffect(() => {
    buyPopupOpened ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
  }, [buyPopupOpened]);

    return (
        <>
          <button className="btn" onClick={() => {
              checkChain(mintWithTokenURI.bind(null, 'bafkreihpoomxw4nwar3nfoo3il2nax3i5bcomoqmmjlsnms6mtasupqsj4'));
              props.isCorrectChainId(isCorrectChain);
            }}>{name}</button>
        </>
    );
}

export default PurchaseButton;