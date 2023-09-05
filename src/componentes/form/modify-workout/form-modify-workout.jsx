import { useState, useEffect } from "react";
import { Button } from "../../button/button";
import { TextField } from "../../text-field/text-field";
import "./form-modify-workout.css";
import { api } from "../../../assets/api/api";

function verifyingTimeSpent(state) {
  const isValid = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/;
  if (isValid.test(state)) {
    return true;
  } else {
    return false;
  }
}

export const FormModifyWorkout = (props) => {
  const [error, setError] = useState(null);
  const [responseOk, setResponseOk] = useState(false);
  const workoutId = props.workout.id;

  useEffect(() => {
    if (responseOk) {
      props.reloadPage(!props.statePage);
      props.closeModal();
    }
  }, [responseOk]);

  const modifyWorkout = async (event, workoutId) => {
    const headers = {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      "Content-type": "application/json",
    };
    event.preventDefault();
    setError(null);
    if (verifyingTimeSpent(timeSpent)) {
      await api
        .put(
          `/workouts/modify/${workoutId}`,
          {
            date,
            timeSpent,
            distance: parseFloat(distance),
            maxSpeed: parseFloat(maxSpeed),
            averageSpeed: parseFloat(averageSpeed),
          },
          { headers }
        )
        .then((response) => {
          console.log(response);
          if (response.status === 200) setResponseOk(true);
          else setResponseOk(false);
        })
        .catch((error) => {
          console.log(error);
          setError(error.response.data.message);
        });
    } else {
      setError("Time spent should be in this format HH:MM:SS");
    }
  };

  const [date, setDate] = useState(`${props.workout.date}`);
  const [timeSpent, setTimeSpent] = useState(`${props.workout.timeSpent}`);
  const [distance, setDistance] = useState(`${props.workout.distance}`);
  const [maxSpeed, setMaxSpeed] = useState(`${props.workout.maxSpeed}`);
  const [averageSpeed, setAverageSpeed] = useState(
    `${props.workout.averageSpeed}`
  );

  return (
    <section className="form-modify-workout">
      <form onSubmit={modifyWorkout}>
        <h2>Modify workout</h2>
        <TextField
          mandatory={true}
          label="Date"
          placeholder="YYYY-MM-DD"
          value={date}
          typed={(value) => setDate(value)}
        />
        <TextField
          mandatory={true}
          label="Time spent"
          placeholder="Hours:Minutes:Seconds"
          value={timeSpent}
          typed={(value) => setTimeSpent(value)}
        />
        <TextField
          mandatory={true}
          label="Distance"
          placeholder="Only numbers"
          value={distance}
          typed={(value) => setDistance(value)}
        />
        <TextField
          mandatory={true}
          label="Max speed"
          placeholder="Only numbers"
          value={maxSpeed}
          typed={(value) => setMaxSpeed(value)}
        />
        <TextField
          mandatory={true}
          label="Average speed"
          placeholder="Only numbers"
          value={averageSpeed}
          typed={(value) => setAverageSpeed(value)}
        />

        {error && (
          <p className="error">{Array.isArray(error) ? error[0] : error}</p>
        )}

        <Button
          onClick={(e) => {
            modifyWorkout(e, workoutId);
          }}
        >
          Modify Workout
        </Button>
      </form>
    </section>
  );
};
