import React from "react"
import { useState } from "react"
import Modal from "react-modal"
import { Button } from "../../button/button"
import { FormAddWorkout } from "../../form/add-workout/form-add-workout"

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
}

export const AddWorkoutModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const closeModal = () => {
        setIsModalOpen(false);
    }

    const openModal = () => {
        setIsModalOpen(true);
    }
    
    return(
        <>
        <Button onClick={openModal}>
            Add workout
        </Button>
        <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={customStyles}>
            <FormAddWorkout/>
            <Button onClick={(e) => closeModal()}>Close modal</Button>
        </Modal>
        </>
    )
}