import './text-field.css'

export const TextField = (props) => {

    const placeholderData = `${props.placeholder}`

    const typingOnPlaceholder = (event) => {
        console.log(event.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input onChange = {typingOnPlaceholder} required = {props.mandatory} placeholder={props.placeholder}/>
        </div>
    )
}