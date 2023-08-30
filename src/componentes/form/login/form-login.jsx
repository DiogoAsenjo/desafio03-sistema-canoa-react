import { useState } from 'react'
import { Button } from '../../button/button'
import { TextField } from '../../text-field/text-field'
import './form-login.css'

export const FormLogin = () => {

    const login = (event) => {
        event.preventDefault();
        console.log(`${username} logged using this password: ${password}`);
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <section className='form-login'>
            <form onSubmit={login}>
                <h2>Login</h2>
                <TextField 
                    mandatory={true} 
                    label="Username (e-mail)" 
                    placeholder="example@email.com"
                    value={username}
                    typed={value => setUsername(value)}
                />
                <TextField 
                    mandatory = {true} 
                    label="Password" 
                    placeholder="********"
                    value={password}
                    typed={value => setPassword(value)}
                    type='password' 
                />
                <p>Remember: password should have at least 8 characters and one of each: lowercase, uppercase, a number and a symbol</p>
                <Button>
                    Login
                </Button>
            </form>
        </section>
    )
}