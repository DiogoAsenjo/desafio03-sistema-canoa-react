import { Banner } from "./componentes/banner/banner";
import { Droplist } from "./componentes/droplist/droplist";
import { FormCreateAccount } from "./componentes/form/create-account/form-create-account";
import { Link } from "react-router-dom";
import "@fontsource/montserrat";

function App() {
  const filters = [
    "Id",
    "Date",
    "Time Spent",
    "Distance",
    "Max Speed",
    "Average Speed",
  ];

  return (
    <div className="App">
      <Banner />
      <FormCreateAccount />
      <Droplist label="Order by " itens={filters} />
    </div>
  );
}

export default App;
