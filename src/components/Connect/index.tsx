import { useConnect, useDisconnect } from 'wagmi';
import styles from './Connect.module.scss';
import { useIsMounted } from '../../hooks';
import { useDispatch } from 'react-redux';
import { setWallet } from '../../redux/walletReducer';
import { Button } from '../components-ui/Button';

export const Connect = () => {
  const dispatch = useDispatch();
  const isMounted = useIsMounted();
  const { disconnect } = useDisconnect();
  
  const {
    activeConnector,
    connectAsync,
    connectors,
    isConnecting,
    pendingConnector,
  } = useConnect();

  
  
  const disconnectHandler = () => {
    disconnect();
    dispatch(setWallet(''));
  };

  const connectHandler = (value: any) => {
    connectAsync(value).then((data) => {
      dispatch(setWallet(data.account));
    });
  };



  return (
    <>
      <div className={styles.walletsDropdown}>
        {activeConnector ? (
          <>
            <div onClick={async () => {
              disconnectHandler();
            }}>
              <Button
                text='Disconnect'
                btnType='btnPrimary'
                location='dropdown'
              />
            </div>
          </>
        ) : (
          connectors
            .filter(function(x) {
              // @ts-ignore: Object is possibly 'null'.
              return isMounted && x.ready && x.id !== activeConnector?.id;
            })
            .map(function(x) {
              return (
                <div key={x.id} onClick={() => {
                  connectHandler(x);
                }}>
                <Button
                  text={x.name}
                  pending={isConnecting && x.id === pendingConnector?.id}
                  location='dropdown'
                  btnType='btnPrimary' />
                </div>
              )
            })
        )}
      </div>

      {/* {error && <div>{error.message}</div>} */}
    </>
  )
}
