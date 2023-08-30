import './button.css'

export const Button = (props) => {
    return (
        <button className='button'>{props.text}</button>
    )
}