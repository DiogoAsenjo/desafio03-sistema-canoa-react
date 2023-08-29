import { Banner } from "./componentes/banner/banner";
import { TextField } from "./componentes/text-field/text-field";

function App() {
  return (
    <div className="App">
      <Banner/>
      <TextField label="Full Name" placeholder="Write your name"/>
      <TextField label="Cellphone" placeholder="(XX)9XXXX-XXXX"/>
      <TextField label="E-mail" placeholder="exemple@email.com"/>
      <TextField label="Password" placeholder="Password should have at least 8 caracters and one of each: lowercase, uppercase, a number and a symbol"/>
      <TextField label="Confirm password" placeholder="Type your password again"/>
    </div>
  );
}

export default App;
