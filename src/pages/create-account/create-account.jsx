import "./create-account.css";
import { Banner } from "../../componentes/banner/banner";
import { FormCreateAccount } from "../../componentes/form/create-account/form-create-account";

function CreateAccount() {
  return (
    <div className="create-account">
      <Banner />
      <FormCreateAccount />
    </div>
  );
}

export default CreateAccount;
