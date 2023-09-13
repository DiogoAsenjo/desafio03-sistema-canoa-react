import { HashRouter, Route, Routes } from "react-router-dom";
import CreateAccount from "../../pages/create-account/create-account";
import Login from "../../pages/login/login";
import AllWorkouts from "../../pages/all-workouts/all-workouts";
import { Deadend } from "./deadend";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/all-workouts" element={<AllWorkouts />} />

        {/* 
        GUARDANDO PARA ROTAS QUE PRECISAM DE AUTENTICAÇÃO
        <Route
          path="/all-workouts"
          element={
            <Deadend>
              <AllWorkouts />
            </Deadend>
          }
        /> */}
      </Routes>
    </HashRouter>
  );
};

export default Router;
