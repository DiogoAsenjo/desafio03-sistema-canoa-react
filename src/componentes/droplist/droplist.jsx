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


//Quando for usar isso na página eu vou precisar colocar isso no arquivo da página antes do return() para conseguir ter todas essas opções no droplist.
/* const filters = [
    'Id',
    'Date',
    'Time Spent',
    'Distance',
    'Max Speed',
    'Average Speed'
  ] */