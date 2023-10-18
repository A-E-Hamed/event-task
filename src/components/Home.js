import React, { useState } from "react";
import styles from "./Home.module.css";

import Modal from "./Modal/Modal";
import FormContent from "./Form/Content/FormContent";

const Home = () => {
  const [openForm, setOpenForm] = useState(false);

  const openFormHandler = () => {
    setOpenForm(true);
  };

  const closeFormHandler = () => {
    setOpenForm(false);
  };

  return (
    <div className={styles.container}>
      <h1>Music Event</h1>
      <div className={styles.content}>
        <h2>GET YOUR TICKET TO THE BEST MUSIC PARTY EVER</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <button className={styles.button} onClick={openFormHandler}>
          Get Your Ticket
        </button>
        {openForm && (
          <Modal onClose={closeFormHandler}>
            <FormContent onClose = {closeFormHandler} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Home;
