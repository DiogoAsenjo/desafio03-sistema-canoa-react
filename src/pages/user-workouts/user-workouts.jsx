import DataList from "../../componentes/list/list";
import { AddWorkoutModal } from "../../componentes/modal/modal-add-workout/modal-add-workout";
import { api } from "../../assets/api/api";
import { useState, useEffect } from "react";
import "./user-workouts.css";
import { MainNavigation } from "../../componentes/main-navigation/main-navigation";

function UserWorkouts() {
  const [, setError] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const [realoadPage, setReloadPage] = useState(false);

  useEffect(() => {
    showUserWorkouts();
  }, [realoadPage]);

  const showUserWorkouts = async (event = null) => {
    const headers = {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      "Content-type": "application/json",
    };
    if (event) event.preventDefault();

    await api
      .get(`/workouts/user`, { headers })
      .then((response) => {
        setWorkouts(response.data);
      })
      .catch((error) => {
        console.log(error);
        setError(error.response.data.message);
      });
  };

  useEffect(() => {
    showUserWorkouts({ preventDefault: () => {} });
  }, []);

  return (
    <section className="workout-section">
      <MainNavigation />
      <div className="workouts">
        <>
          <div className="Titles">
            <p className="date">Date</p>
            <p className="schedule">Schedule</p>
            <p className="timeSpent">Time Spent</p>
            <p className="distance">Distance</p>
            <p className="maxSpeed">Max Speed</p>
            <p className="averageSpeed">Avg. Speed</p>
            <p className="actions">Actions</p>
          </div>
          {workouts.length > 0 &&
            workouts.map((workout) => (
              <DataList
                workout={workout}
                reloadPage={setReloadPage}
                statePage={realoadPage}
                ableToModify={true}
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

export default UserWorkouts;
