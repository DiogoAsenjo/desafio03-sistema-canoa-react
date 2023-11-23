import "./login.css";
import { Banner } from "../../componentes/banner/banner";
import { FormLogin } from "../../componentes/form/login/form-login";

function Login() {
  return (
    <div className="login">
      <Banner />
      <FormLogin />
    </div>
  );
}

export default Login;
