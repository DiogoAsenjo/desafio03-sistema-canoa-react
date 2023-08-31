import { Button } from '../../button/button'
import { TextField } from '../../text-field/text-field'
import './form-create-account.css'
import { useState } from 'react'

export const FormCreateAccount = () => {

    const createAccount = (event) => {
        event.preventDefault();
        console.log(`Full name: ${fullName} Cellphone ${cellphone} Email: ${email} Password: ${password} Confirme password: ${confirmPassword}`);
    }

    const [fullName, setFullName] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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
                <p>Password should have at least 8 characters and one of each: lowercase, uppercase, a number and a symbol</p>
                <TextField 
                    mandatory = {true} 
                    label="Confirm password" 
                    placeholder="Type your password again"
                    value={confirmPassword}
                    typed={value => setConfirmPassword(value)}
                />
                <Button>
                    Create Account
                </Button>
            </form>
        </section>
    )
}