import DataList from "../../componentes/list/list";
import { api } from "../../assets/api/api";
import { useState, useEffect } from "react";
import "./all-workouts.css";
import { MainNavigation } from "../../componentes/main-navigation/main-navigation";

function AllWorkouts() {
  const [, setError] = useState([]);
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
      <MainNavigation />
      <div className="workouts">
        <>
          <div className="Titles">
            <p className="createdBy">Created by</p>
            <p className="date">Date</p>
            <p className="schedule">Schedule</p>
            <p className="timeSpent">Time Spent</p>
            <p className="distance">Distance</p>
            <p className="maxSpeed">Max Speed</p>
            <p className="averageSpeed">Avg. Speed</p>
          </div>
          {workouts.length > 0 &&
            workouts.map((workout) => (
              <DataList
                workout={workout}
                reloadPage={setReloadPage}
                statePage={realoadPage}
                ableToModify={false}
              />
            ))}
        </>
      </div>

      {/* <AddWorkoutModal
        className="modal"
        reloadPage={setReloadPage}
        statePage={realoadPage}
      /> */}
    </section>
  );
}

export default AllWorkouts;
