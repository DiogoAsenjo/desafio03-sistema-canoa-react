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

function verififyDecimalNumbers(state) {
  const regex = /^[0-9]+(\.[0-9]{1,2})?$/;
  return regex.test(state);
}

export const FormAddWorkout = ({ reloadPage, statePage, closeModal }) => {
  const [error, setError] = useState(null);
  const [responseOk, setResponseOk] = useState(false);

  useEffect(() => {
    if (responseOk) {
      reloadPage(!statePage);
      closeModal();
    }
  }, [responseOk, reloadPage, statePage, closeModal]);

  const addWorkout = async (event) => {
    const headers = {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      "Content-type": "application/json",
    };
    event.preventDefault();
    setError(null);
    if (
      verifyingTimeSpent(timeSpent) &&
      verififyDecimalNumbers(distance) &&
      verififyDecimalNumbers(maxSpeed) &&
      verififyDecimalNumbers(averageSpeed)
    ) {
      await api
        .post(
          "/workouts",
          {
            date,
            schedule,
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
    } else if (!verifyingTimeSpent(timeSpent)) {
      setError("Time spent should be in this format HH:MM:SS");
    } else setError("Decimal numbers should use .");
  };

  const [date, setDate] = useState("");
  const [schedule, setSchedule] = useState("");
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
          label="Schedule"
          placeholder="XXhXX, 'Trip' or 'Other'"
          value={schedule}
          typed={(value) => setSchedule(value)}
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
          placeholder="Only numbers. Ex: 9.6"
          value={distance}
          typed={(value) => setDistance(value)}
        />
        <div className="twoInputs">
          <label htmlFor="">Max speed</label>
          <input
            className="inputs"
            mandatory={true}
            placeholder=""
            value={maxSpeed}
            onChange={(e) => setMaxSpeed(e.target.value)}
          ></input>
          <label htmlFor="">Average speed</label>
          <input
            className="inputs"
            mandatory={true}
            placeholder=""
            value={averageSpeed}
            onChange={(e) => setAverageSpeed(e.target.value)}
          ></input>
        </div>

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
