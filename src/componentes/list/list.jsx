import { Button } from "../button/button";
import "./list.css";
import React, { useEffect } from "react";
import { ModifyWorkoutModal } from "../modal/modal-modify-workout/modal-modify-workout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function DataList(workout) {
  workout = workout.workout;

  return (
    <>
      <div className="workout">
        <p className="date">{workout?.date}</p>
        <p className="timeSpent">{workout?.timeSpent}</p>
        <p className="distance">{workout?.distance}</p>
        <p className="maxSpeed">{workout?.maxSpeed}</p>
        <p className="averageSpeed">{workout?.averageSpeed}</p>
        <div className="actions">
          <ModifyWorkoutModal />
          <Button>
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </div>
      </div>
    </>
  );
}

export default DataList;
