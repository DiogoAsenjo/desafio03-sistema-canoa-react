import { HashRouter, Route, Routes } from "react-router-dom";
import CreateAccount from "../../pages/create-account/create-account";
import Login from "../../pages/login/login";
import AllWorkouts from "../../pages/all-workouts/all-workouts";
import { Deadend } from "./deadend";
import UserWorkouts from "../../pages/user-workouts/user-workouts";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/all-workouts" element={<AllWorkouts />} />
        <Route
          path="/user-workouts"
          element={
            <Deadend>
              <UserWorkouts />
            </Deadend>
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default Router;
