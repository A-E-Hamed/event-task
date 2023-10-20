import styles from "./FormContent.module.css";
import InformationForm from "../PersonalInformation/InformationForm";

const FormContent = (props) => {  
  return (
    <div className={styles.form}>
        <InformationForm
          onClose = {props.onClose}
        />
    </div>
  );
};

export default FormContent;