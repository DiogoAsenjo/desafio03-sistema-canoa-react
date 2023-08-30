import './login.css'
import { Banner } from '../../componentes/banner/banner';
import { FormLogin } from '../../componentes/form/login/form-login';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login">
      <Banner/>
      <FormLogin/>
      <Link to = 'create-account'>Don't have and account? Create one!</Link>
      <Link to = 'workout'>Check your workouts here!</Link>
    </div>
  );
}

export default Login;