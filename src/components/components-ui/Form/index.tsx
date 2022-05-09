import styles from './Form.module.scss';
import { Title } from '../Title';
import { Button } from '../Button';

export const Form = ({ buttonText, formData, inputs }: any) => {
  const {method, action } = formData;
  const addPlaceholder = (e: any) => {
    const input = e.currentTarget;
    input.placeholder = '';
  };

  const removePlaceholder = (e: any) => {
    const input = e.currentTarget;
    if (input.value) return;
    input.placeholder = input.dataset.placeholder;
    
  };



  return (
    <>
      <form id='subscriptionForm' className={styles.form} method={method} action={action}>
        {inputs.map((item: any) => {
          return <input className={styles.input} key={item.id} data-placeholder={item.placeholder} placeholder={item.placeholder} name={item.name} onClick={addPlaceholder} onBlur={removePlaceholder} />
        })}
        <Button
          text={buttonText}
          location='form'
          btnType='btnSecondary' />
      </form>
    </>
  );
}
