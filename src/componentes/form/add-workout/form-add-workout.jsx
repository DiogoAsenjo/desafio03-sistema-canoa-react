import { useState, useEffect } from "react";
import { Button } from "../../button/button";
import { TextField } from "../../text-field/text-field";
import "./form-add-workout.css";
import { api } from "../../../assets/api/api";

function verifyingTimeSpent(state) {
  const isValid = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/;
  if (isValid.test(state)) {
    return true;
  } else {
    return false;
  }
}

export const FormAddWorkout = (props) => {
  const [error, setError] = useState(null);
  const [responseOk, setResponseOk] = useState(false);

  useEffect(() => {
    if (responseOk) {
      props.reloadPage(!props.statePage);
      props.closeModal();
    }
  }, [responseOk]);

  const addWorkout = async (event) => {
    const headers = {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      "Content-type": "application/json",
    };
    event.preventDefault();
    setError(null);
    if (verifyingTimeSpent(timeSpent)) {
      await api
        .post(
          "/workouts",
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

  const [date, setDate] = useState("");
  const [timeSpent, setTimeSpent] = useState("");
  const [distance, setDistance] = useState("");
  const [maxSpeed, setMaxSpeed] = useState("");
  const [averageSpeed, setAverageSpeed] = useState("");

  return (
    <section className="form-add-workout">
      <form onSubmit={addWorkout}>
        <h2>Create workout</h2>
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
            addWorkout(e);
          }}
        >
          Add workout
        </Button>
      </form>
    </section>
  );
};
