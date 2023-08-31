import { useState } from 'react'
import { Button } from '../../button/button'
import { TextField } from '../../text-field/text-field'
import './form-modify-workout.css'

export const FormModifyWorkout = () => {

   const modifyWorkout = (event) => {
        event.preventDefault();
        console.log(`Date: ${date} Time Spent: ${timeSpent} Distance: ${distance} Max Speed: ${maxSpeed} Average Speed: ${averageSpeed}`);
    }

    const [date, setDate] = useState('');
    const [timeSpent, setTimeSpent] = useState('');
    const [distance, setDistance] = useState('');
    const [maxSpeed, setMaxSpeed] = useState('');
    const [averageSpeed, setAverageSpeed] = useState('');

    return (
        <section className='form-modify-workout'>
            <form onSubmit={modifyWorkout}>
                <h2>Modify workout</h2>
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
                    typed={value => setDistance(value)}
                />
                <TextField 
                    mandatory={true} 
                    label="Max speed" 
                    placeholder="Only numbers"
                    value={maxSpeed}
                    typed={value => setMaxSpeed(value)}
                />
                <TextField 
                    mandatory={true} 
                    label="Average speed" 
                    placeholder="Only numbers"
                    value={averageSpeed}
                    typed={value => setAverageSpeed(value)}
                />
                <Button>
                    Modify workout
                </Button>
            </form>
        </section>
    )
}