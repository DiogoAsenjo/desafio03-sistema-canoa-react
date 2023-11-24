import { useState } from "react";
import { Button } from "../../button/button";
import { TextField } from "../../text-field/text-field";
import "./form-login.css";
import { api } from "../../../assets/api/api";
import { useNavigate } from "react-router-dom";

export const FormLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState([]);

  const login = async (event) => {
    event.preventDefault();
    console.log(username);
    await api
      .post("/", {
        email: username,
        password,
      })
      .then((response) => {
        sessionStorage.setItem("token", response.data.access_token);
        if (response.request.status === 200) navigate("/user-workouts");
      })
      .catch((error) => setError(error.response.data.message));
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="form-login">
      <form onSubmit={login}>
        <h2>Login</h2>
        <TextField
          mandatory={true}
          label="Username (e-mail)"
          placeholder="example@email.com"
          value={username}
          typed={(value) => setUsername(value)}
        />
        <TextField
          mandatory={true}
          label="Password"
          placeholder="********"
          value={password}
          typed={(value) => setPassword(value)}
          type="password"
        />
        {/* <p>Remember: password should have at least 8 characters and one of each: lowercase, uppercase, a number and a symbol</p> */}
        {error && typeof error === "string" ? (
          <p className="error">{error}</p>
        ) : (
          error?.length > 0 && <p className="error">{error[0]}</p>
        )}

        <Button
          className="button-login"
          onClick={(e) => {
            login(e);
          }}
        >
          Login :P
        </Button>
        <Button
          className="button-create"
          onClick={(e) => {
            navigate("/create-account");
          }}
        >
          Create account :P
        </Button>
      </form>
    </section>
  );
};
