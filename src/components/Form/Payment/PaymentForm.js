import styles from './PaymentForm.module.css';

const PaymentForm = ({ paymentSubmited, handlePaymentSubmit, handleSubmit , onClose}) => {
  console.log(onClose);
    return (
      <div>
        <h2>Pay Here</h2>
        <div className={styles.checkboxContainer}>
          <label>
            <input
              type="checkbox"
              id="payment"
              onChange={handlePaymentSubmit}
            />
            Please Check The Box To Confirm Your Payment Method
          </label>
        </div>
        
          <button
            type="submit"
            className={styles.button}
            onClick={handleSubmit}
          >
            Buy Now
          </button>
          <button onClick={onClose} className={styles.button}>Exit</button>
        
      </div>
    );
  };

  export default PaymentForm;