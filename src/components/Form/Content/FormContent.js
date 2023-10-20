import React, { useState } from "react";
import styles from "./FormContent.module.css";
import PaymentForm from "../Payment/PaymentForm";
import InformationForm from "../PersonalInformation/InformationForm";

const FormContent = (props) => {
  const [openPaymentForm, setOpenPaymentForm] = useState(false);
  const [dataValidation, setDataValidation] = useState(false);
  const [paymentSubmitted, setPaymentSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    oct25: false,
    oct26: false,
  });
  
  

  const handlePayment = () => {
    if (formData.name && formData.email && (formData.oct25 || formData.oct26)) {
      setOpenPaymentForm(true);
      setDataValidation(false);
    } else {
      setDataValidation(true);
    }
  };


  const handleSubmit = (event) => {
    if (paymentSubmitted) {
      // Perform Actions on DB
    } else {
      setPaymentSubmitted(true);
    }
  };

  return (
    <div className={styles.form}>
      {openPaymentForm ? (
        <PaymentForm
          paymentSubmitted={paymentSubmitted}
          handleSubmit={handleSubmit}
          onClose = {props.onClose}
          formData={formData}
        />
      ) : (
        <InformationForm
          formData={formData}
          setFormData={setFormData}
          handlePayment={handlePayment}
          onClose = {props.onClose}
        />
      )}
      {dataValidation && <div className={styles.dataValidation}>Please enter all required fields.</div>}
      
    </div>
  );
};

export default FormContent;