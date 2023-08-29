import { TextField } from '../text-field/text-field'
import './form-create-account.css'

export const FormCreateAccount = () => {
    return (
        <section className='form-create-account'>
            <form>
                <h2>Fill all the fields to create an account</h2>
                <TextField label="Full Name" placeholder="Write your name"/>
                <TextField label="Cellphone" placeholder="(XX)9XXXX-XXXX"/>
                <TextField label="E-mail" placeholder="example@email.com"/>
                <TextField label="Password" placeholder="Password should have at least 8 characters and one of each: lowercase, uppercase, a number and a symbol"/>
                <TextField label="Confirm password" placeholder="Type your password again"/>
            </form>
        </section>
    )
}