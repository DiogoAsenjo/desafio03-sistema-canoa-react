import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import { Button } from "../../button/button";
import { FormModifyWorkout } from "../../form/modify-workout/form-modify-workout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    height: "80%",
    backgroundColor: "darkslategrey",
  },
};

export const ModifyWorkoutModal = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Button onClick={openModal}>
        <FontAwesomeIcon icon={faPenToSquare} />
      </Button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <FormModifyWorkout
          workout={props.workout}
          reloadPage={props.reloadPage}
          statePage={props.statePage}
          closeModal={closeModal}
        />
        <Button onClick={(e) => closeModal()}>Close modal</Button>
      </Modal>
    </>
  );
};
