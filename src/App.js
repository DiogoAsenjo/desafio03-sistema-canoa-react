import { Banner } from "./componentes/banner/banner";
import { Button } from "./componentes/button/button";
import { Droplist } from "./componentes/droplist/droplist";
import { FormCreateAccount } from "./componentes/form/create-account/form-create-account";

function App() {

  const filters = [
    'Id',
    'Date',
    'Time Spent',
    'Distance',
    'Max Speed',
    'Average Speed'
  ]
  
  return (
    <div className="App">
      <Banner/>
      <FormCreateAccount/>
      <Droplist label = 'Order by ' itens = {filters}/>
    </div>
  );
}

export default App;
