import { Button } from '../button/button'
import { TextField } from '../text-field/text-field'
import './form-create-account.css'

export const FormCreateAccount = () => {

    const createAccount = (event) => {
        event.preventDefault();
        console.log('Account created successfully');
    }

    return (
        <section className='form-create-account'>
            <form onSubmit={createAccount}>
                <h2>Fill all the fields to create an account</h2>
                <TextField mandatory = {true} label="Full Name" placeholder="Write your name"/>
                <TextField mandatory = {true} label="Cellphone" placeholder="(XX)9XXXX-XXXX"/>
                <TextField mandatory = {true} label="E-mail" placeholder="example@email.com"/>
                <TextField mandatory = {true} label="Password" placeholder="Type your password"/>
                <p>Password should have at least 8 characters and one of each: lowercase, uppercase, a number and a symbol</p>
                <TextField mandatory = {true} label="Confirm password" placeholder="Type your password again"/>
                <Button>
                    Create Account
                </Button>
            </form>
        </section>
    )
}