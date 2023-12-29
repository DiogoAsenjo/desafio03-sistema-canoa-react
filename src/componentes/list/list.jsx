import { Button } from "../button/button";
import "./list.css";
import React, { useState } from "react";
import { ModifyWorkoutModal } from "../modal/modal-modify-workout/modal-modify-workout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { api } from "../../assets/api/api";

const extractFirstName = (fullName) => {
  const words = fullName.split(" ");
  const firstName = words[0];
  if (!words[1]) {
    return `${firstName}`;
  }

  const lastName = words[1][0];
  return `${firstName} ${lastName}.`;
};

function DataList(props) {
  //const [selectedWorkoutId, setSelectedWorkoutId] = useState([]);
  const workout = props.workout;
  const workoutId = props.workout.id;

  const [, setError] = useState([]);

  const deleteWorkout = async (event, workoutId) => {
    const headers = {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      "Content-type": "application/json",
    };
    event.preventDefault();
    await api
      .delete(`/workouts/${workoutId}`, { headers })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        setError(error.response.data.message);
      });
    props.reloadPage(!props.statePage);
  };

  return (
    <>
      <div className="workout">
        {!props.ableToModify && (
          <p className="createdBy">
            {extractFirstName(workout?.user.fullName)}
          </p>
        )}
        <p className="date">{workout?.date}</p>
        <p className="schedule">{workout?.schedule}</p>
        <p className="timeSpent">{workout?.timeSpent}</p>
        <p className="distance">{workout?.distance}</p>
        <p className="maxSpeed">{workout?.maxSpeed}</p>
        <p className="averageSpeed">{workout?.averageSpeed}</p>
        {props.ableToModify && (
          <div className="actions">
            <ModifyWorkoutModal
              workout={workout}
              reloadPage={props.reloadPage}
              statePage={props.statePage}
            />
            <Button
              onClick={(e) => {
                deleteWorkout(e, workoutId);
              }}
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

export default DataList;
