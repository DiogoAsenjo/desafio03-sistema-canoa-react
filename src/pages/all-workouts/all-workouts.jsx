import DataList from "../../componentes/list/list";
import { AddWorkoutModal } from "../../componentes/modal/modal-add-workout/modal-add-workout";
import { api } from "../../assets/api/api";
import { useState, useEffect } from "react";
import "./all-workouts.css";

function AllWorkouts() {
  const [error, setError] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const [realoadPage, setReloadPage] = useState(false);

  useEffect(() => {
    showAllWorkouts();
  }, [realoadPage]);

  const showAllWorkouts = async (event = null) => {
    const headers = {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      "Content-type": "application/json",
    };
    if (event) event.preventDefault();

    await api
      .get(`/workouts/all`, { headers })
      .then((response) => {
        setWorkouts(response.data);
      })
      .catch((error) => {
        console.log(error);
        setError(error.response.data.message);
      });
  };

  useEffect(() => {
    showAllWorkouts({ preventDefault: () => {} });
  }, []);

  return (
    <section className="workout-section">
      <div className="workouts">
        <>
          <div className="Titles">
            <p className="date">Date</p>
            <p className="timeSpent">Time Spent</p>
            <p className="distance">Distance</p>
            <p className="maxSpeed">Max Speed</p>
            <p className="averageSpeed">Average Speed</p>
            <p className="actions">Actions</p>
          </div>
          {workouts.length > 0 &&
            workouts.map((workout) => (
              <DataList
                workout={workout}
                reloadPage={setReloadPage}
                statePage={realoadPage}
              />
            ))}
        </>
      </div>

      <AddWorkoutModal
        className="modal"
        reloadPage={setReloadPage}
        statePage={realoadPage}
      />
    </section>
  );
}

export default AllWorkouts;
