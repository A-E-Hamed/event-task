import React from "react";
import styles from "./FormDataDisplay.module.css";

const FormDataDisplay = ({ formData , onClose }) => {
  return (
    <div>
        <h3>Please Check Your Mail to get QRcode </h3>
      <div className={styles.container}>
        <h2>Your Reservation Data</h2>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>October 25th: {formData.oct25 ? "Yes" : "No"}</p>
        <p>October 26th: {formData.oct26 ? "Yes" : "No"}</p>
      </div>
      <button onClick={onClose} className={styles.button}>Exit</button>
    </div>
  );
};

export default FormDataDisplay;
