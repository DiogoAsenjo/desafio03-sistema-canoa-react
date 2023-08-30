import { HashRouter, Route, Routes } from "react-router-dom";
import CreateAccount from "../../pages/create-account/create-account";
import Login from "../../pages/login/login";

const Router = () => {
    return(
        <HashRouter>
            <Routes>
                <Route index element = {<Login/>}/>
                <Route path = '/create-account' element = {<CreateAccount/>}/>
            </Routes>
        </HashRouter>
    )
}

export default Router;