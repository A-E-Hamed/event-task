import React, { useState } from "react";
import styles from "./FormContent.module.css";
import PaymentForm from "../Payment/PaymentForm";
import InformationForm from "../PersonalInformation/InformationForm";
import FormDataDisplay from "../../DataDisplay/FormDataDisplay";

const FormContent = (props) => {
  const [openPaymentForm, setOpenPaymentForm] = useState(false);
  const [dataValidation, setDataValidation] = useState(false);
  const [paymentSubmitted, setPaymentSubmitted] = useState(false);
  const [formDataDisplay, setFormDataDisplay] = useState(null);

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

  const handlePaymentSubmit = () => {
    setPaymentSubmitted(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (paymentSubmitted) {
      // Perform data submission to Firebase or other actions
      setFormDataDisplay(formData);
    } else {
      setPaymentSubmitted(true);
    }
  };

  return (
    <div className={styles.form}>
      {openPaymentForm ? (
        <PaymentForm
          paymentSubmitted={paymentSubmitted}
          handlePaymentSubmit={handlePaymentSubmit}
          handleSubmit={handleSubmit}
          onClose = {props.onClose}
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
      {formDataDisplay && <FormDataDisplay formData={formDataDisplay} onClose = {props.onClose} />}
    </div>
  );
};

export default FormContent;