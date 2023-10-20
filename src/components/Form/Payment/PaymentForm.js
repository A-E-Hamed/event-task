import React, { useState } from "react";
import FormDataDisplay from "../../DataDisplay/FormDataDisplay";
import styles from "./PaymentForm.module.css";

const PaymentForm = ({ formData, onClose }) => {
  const [formReady, setFormReady] = useState(false);
  const [paymentSubmitted, setPaymentSubmitted] = useState(false);
  const [dataValidation, setDataValidation] = useState(false);


  const handleCheckboxChange = (event) => {
    setFormReady(event.target.checked);
  };

  const handleSubmit = () => {
    // Do somthing with DB
    setPaymentSubmitted(true);
  };

  const handleBuyNowClick = () => {
    if (formReady) {
      handleSubmit();
      setDataValidation(false);
    } else {
      setDataValidation(true);
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
          <button onClick={onClose} className={styles.button}>
            Exit
          </button>
        </>
      )}
      {dataValidation && (
        <div className={styles.dataValidation}>
          Please enter all required fields.
        </div>
      )}
    </div>
    
  );
};

export default PaymentForm;
