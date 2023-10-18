import styles from './PaymentForm.module.css';

const PaymentForm = ({ paymentSubmited, handlePaymentSubmit, handleSubmit }) => {
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
            Please Check The Box To Pay
          </label>
        </div>
        
          <button
            type="submit"
            className={styles.button}
            onClick={handleSubmit}
          >
            Reserve Your Ticket
          </button>
        
      </div>
    );
  };

  export default PaymentForm;