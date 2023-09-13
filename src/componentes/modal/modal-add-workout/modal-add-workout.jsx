import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import "./modal-add-workout.css";
import { FormAddWorkout } from "../../form/add-workout/form-add-workout";

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

export const AddWorkoutModal = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <button className="addButton" onClick={openModal}>
        Add workout
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <FormAddWorkout
          reloadPage={props.reloadPage}
          statePage={props.statePage}
          closeModal={closeModal}
        />
        {/* <Button onClick={(e) => closeModal()}>Close modal</Button> */}
      </Modal>
    </>
  );
};
