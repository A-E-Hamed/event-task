import React from "react";
import styles from "./FormDataDisplay.module.css";

const FormDataDisplay = ({ formData }) => {
  return (
    <div className={styles.container}>
      <h3>You Have Successfully Reserved your Ticket</h3>
      <h2>Your Reservation Data</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>October 25th: {formData.oct25 ? "Yes" : "No"}</p>
      <p>October 26th: {formData.oct26 ? "Yes" : "No"}</p>
    </div>
  );
};

export default FormDataDisplay;
