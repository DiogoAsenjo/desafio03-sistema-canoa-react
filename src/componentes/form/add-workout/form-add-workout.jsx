import { useState } from 'react'
import { Button } from '../../button/button'
import { TextField } from '../../text-field/text-field'
import './form-add-workout.css'
import { api } from '../../../assets/api/api'

export const FormAddWorkout = () => {

    const [error, setError] = useState([]);


    const addWorkout = async(event) => {
        const headers = {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`, 
            'Content-type': 'application/json'
        }
        event.preventDefault();
        console.log(date, timeSpent, distance, maxSpeed, averageSpeed)
        await api.post("/workouts", {
            date,
            timeSpent,
            distance,
            maxSpeed,
            averageSpeed
        }, {headers})
        .then((response) => {
            console.log(response);

        })
        .catch((error) => {
            //Se não estiver autorizado passar aviso e redirecionar pro login.
            console.log(error)
            setError(error.response.data.message)
        })
    }

    const [date, setDate] = useState('');
    const [timeSpent, setTimeSpent] = useState('');
    const [distance, setDistance] = useState('');
    const [maxSpeed, setMaxSpeed] = useState('');
    const [averageSpeed, setAverageSpeed] = useState('');

    return (
        <section className='form-add-workout'>
            <form onSubmit={addWorkout}>
                <h2>Create workout</h2>
                <TextField 
                    mandatory={true} 
                    label="Date" 
                    placeholder="YYYY-MM-DD"
                    value={date}
                    typed={value => setDate(value)}
                />
                <TextField 
                    mandatory = {true} 
                    label="Time spent" 
                    placeholder="Hours:Minutes:Seconds"
                    value={timeSpent}
                    typed={value => setTimeSpent(value)}
                />
                <TextField 
                    mandatory={true} 
                    label="Distance" 
                    placeholder="Only numbers"
                    value={distance}
                    typed={value => setDistance(parseFloat(value))}
                />
                <TextField 
                    mandatory={true} 
                    label="Max speed" 
                    placeholder="Only numbers"
                    value={maxSpeed}
                    typed={value => setMaxSpeed(parseFloat(value))}
                />
                <TextField 
                    mandatory={true} 
                    label="Average speed" 
                    placeholder="Only numbers"
                    value={averageSpeed}
                    typed={value => setAverageSpeed(parseFloat(value))}
                />
                <Button onClick={(e) => {addWorkout(e)}}>
                    Add workout
                </Button>
            </form>
        </section>
    )
}