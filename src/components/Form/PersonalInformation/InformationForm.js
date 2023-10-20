import { useState } from "react";
import styles from "./InformationForm.module.css";
import PaymentForm from "../Payment/PaymentForm";

const InformationForm = (props) => {
  const [openPaymentForm, setOpenPaymentForm] = useState(false);
  const [dataValidation, setDataValidation] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    oct25: false,
    oct26: false,
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleCheckboxChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.checked,
    });
  };

  const handlePayment = () => {
    if (formData.name && formData.email && (formData.oct25 || formData.oct26)) {
      setOpenPaymentForm(true);
      setDataValidation(false);
    } else {
      setDataValidation(true);
    }
  };

  return (
    <div>
      {openPaymentForm ? (
        <PaymentForm 
          formData={formData}
          onClose={props.onClose}
        />
      ) : (
        <div>
          <h2>Reservation Form</h2>
          <form>
            <div className={styles.infoGroup}>
              <div className={styles.infoElement}>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.infoElement}>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className={styles.infoGroup}>
              <div className={styles.checkboxContainer}>
                <label>
                  <input
                    type="checkbox"
                    id="oct25"
                    checked={formData.oct25}
                    onChange={handleCheckboxChange}
                  />
                  October 25th
                </label>
              </div>
              <div className={styles.checkboxContainer}>
                <label>
                  <input
                    type="checkbox"
                    id="oct26"
                    checked={formData.oct26}
                    onChange={handleCheckboxChange}
                  />
                  October 26th
                </label>
              </div>
            </div>
            <button
              type="button"
              onClick={handlePayment}
              className={styles.button}
            >
              Buy Now
            </button>
            <button className={styles.button}>Exit</button>
          </form>
        </div>
      )}
      {dataValidation && (
        <div className={styles.dataValidation}>
          Please enter all required fields.
        </div>
      )}
    </div>
  );
};

export default InformationForm;
