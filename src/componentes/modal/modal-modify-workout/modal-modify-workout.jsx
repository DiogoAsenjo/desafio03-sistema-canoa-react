import React from "react"
import { useState } from "react"
import Modal from "react-modal"
import { Button } from "../../button/button"
import { FormModifyWorkout } from "../../form/modify-workout/form-modify-workout"


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        height: '80%',
    },
}

export const ModifyWorkoutModal = () => {
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
            Modify workout
        </Button>
        <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={customStyles}>
            <FormModifyWorkout/>
            <Button onClick={(e) => closeModal()}>Close modal</Button>
        </Modal>
        </>
    )
}