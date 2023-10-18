import React from "react";
import styles from "./FormDataDisplay.module.css";

const FormDataDisplay = ({ formData }) => {
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
    </div>
  );
};

export default FormDataDisplay;
