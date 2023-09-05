import { Button } from "../../button/button";
import { TextField } from "../../text-field/text-field";
import "./form-create-account.css";
import { useState } from "react";
import { api } from "../../../assets/api/api";
import { useNavigate } from "react-router-dom";

function verifyingPhoneNumber(input) {
  const phonePattern = /^\(\d{2}\)9\d{4}-\d{4}$/;
  return phonePattern.test(input);
}

export const FormCreateAccount = () => {
  const navigate = useNavigate();
  const [error, setError] = useState([]);

  const createAccount = async (event) => {
    event.preventDefault();
    if (verifyingPhoneNumber(cellphone)) {
      await api
        .post("/signup", {
          fullName,
          cellphone,
          email,
          password,
        })
        .then((response) => {
          console.log(response);
          if (response.request.status === 200) navigate("/");
        })
        .catch((error) => {
          setError(error.response.data.message);
          console.log(error);
        });
    } else {
      setError("Cellphone should be in this format: (XX)9XXXX-XXXX");
    }
  };

  const [fullName, setFullName] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="form-create-account">
      <form onSubmit={createAccount}>
        <h2>Fill all the fields to create an account</h2>
        <TextField
          mandatory={true}
          label="Full Name"
          placeholder="Write your name"
          value={fullName}
          typed={(value) => setFullName(value)}
        />
        <TextField
          mandatory={true}
          label="Cellphone"
          placeholder="(XX)9XXXX-XXXX"
          value={cellphone}
          typed={(value) => setCellphone(value)}
        />
        <TextField
          mandatory={true}
          label="E-mail"
          placeholder="example@email.com"
          value={email}
          typed={(value) => setEmail(value)}
        />
        <TextField
          mandatory={true}
          label="Password"
          placeholder="Type your password"
          value={password}
          typed={(value) => setPassword(value)}
        />
        {error.length === 0 && (
          <p>
            Password should have at least 8 characters and one of each:
            lowercase, uppercase, a number and a symbol
          </p>
        )}
        {error && (
          <p className="error">{Array.isArray(error) ? error[0] : error}</p>
        )}
        <Button
          onClick={(e) => {
            createAccount(e);
          }}
        >
          Create Account
        </Button>
      </form>
    </section>
  );
};
