
import styles from "./InformationForm.module.css";

const InformationForm = ({ formData, setFormData, handlePayment }) => {
  const { name, email, oct25, oct26 } = formData;

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

  return (
    <div>
      <h2>Reservation Form</h2>
      <form>
        <div className={styles.infoGroup}>
          <div className={styles.infoElement}>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.infoElement}>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
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
                checked={oct25}
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
                checked={oct26}
                onChange={handleCheckboxChange}
              />
              October 26th
            </label>
          </div>
        </div>
        <button type="button" onClick={handlePayment} className={styles.button}>
          Buy Now
        </button>
        <button className={styles.button}>Exit</button>
      </form>
    </div>
  );
};

export default InformationForm;