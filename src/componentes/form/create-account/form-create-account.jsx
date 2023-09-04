import { Button } from '../../button/button'
import { TextField } from '../../text-field/text-field'
import './form-create-account.css'
import { useState } from 'react'
import { api } from '../../../assets/api/api'
import { useNavigate } from 'react-router-dom'

export const FormCreateAccount = () => {

    const navigate = useNavigate();
    const [error, setError] = useState([]);

    const createAccount = async(event) => {
        event.preventDefault();
        console.log(fullName, cellphone, email, password)
        await api.post("/signup", {
            fullName,
            cellphone,
            email,
            password
        })
        .then((response) => {
            console.log(response);
            if(response.request.status === 200) navigate("/")

        })
        .catch((error) => {
            setError(error.response.data.message)
            console.log(error)
        })
    }

    const [fullName, setFullName] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <section className='form-create-account'>
            <form onSubmit={createAccount}>
                <h2>Fill all the fields to create an account</h2>
                <TextField 
                    mandatory = {true} 
                    label="Full Name" 
                    placeholder="Write your name"
                    value={fullName}
                    typed={value => setFullName(value)}
                />
                <TextField 
                    mandatory = {true} 
                    label="Cellphone" 
                    placeholder="(XX)9XXXX-XXXX"
                    value={cellphone}
                    typed={value => setCellphone(value)}
                />
                <TextField 
                    mandatory = {true} 
                    label="E-mail" 
                    placeholder="example@email.com"
                    value={email}
                    typed={value => setEmail(value)}
                />
                <TextField 
                    mandatory = {true} 
                    label="Password" 
                    placeholder="Type your password"
                    value={password}
                    typed={value => setPassword(value)}
                />
                {error.length === 0 && <p>Password should have at least 8 characters and one of each: lowercase, uppercase, a number and a symbol</p>}
                {error.length > 0 && <p className='error'>{error[0]}</p>}
                {/* <TextField 
                    mandatory = {true} 
                    label="Confirm password" 
                    placeholder="Type your password again"
                    value={confirmPassword}
                    typed={value => setConfirmPassword(value)}
                /> */}
                <Button onClick={(e) => {createAccount(e)}}>
                    Create Account
                </Button>
            </form>
        </section>
    )
}