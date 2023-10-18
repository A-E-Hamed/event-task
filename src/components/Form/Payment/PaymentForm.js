import React, { useState } from 'react';
import FormDataDisplay from '../../DataDisplay/FormDataDisplay';
import styles from './PaymentForm.module.css';

const PaymentForm = ({ paymentSubmitted, handleSubmit, formData, onClose }) => {
  const [formReady, setFormReady] = useState(false);

  const handleCheckboxChange = (event) => {
    setFormReady(event.target.checked);
  };

  const handleBuyNowClick = () => {
    if (formReady) {
      handleSubmit();
    } else {
      
      console.log("Please check the checkbox to confirm your payment method.");
    }
  };

  return (
    <div>
      {paymentSubmitted ? (
        <FormDataDisplay formData={formData} onClose={onClose} />
      ) : (
        <>
          <h2>Pay Here</h2>
          <div className={styles.checkboxContainer}>
            <label>
              <input
                type="checkbox"
                id="payment"
                onChange={handleCheckboxChange}
              />
              Please Check The Box To Confirm Your Payment Method
            </label>
          </div>

          <button
            type="submit"
            className={styles.button}
            onClick={handleBuyNowClick}
          >
            Buy Now
          </button>
          <button onClick={onClose} className={styles.button}>Exit</button>
        </>
      )}
    </div>
  );
};

export default PaymentForm;