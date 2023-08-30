import './droplist.css'

export const Droplist = (props) => {
    return (
        <div className='droplist'>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => <option key = {item}>{item}</option>)}
            </select>
        </div>
    )
}

