import { Fragment } from "react"

const DateInput=({value,setValue,label,id,name})=>{
    const handleDateChange=(e)=>{
        let {name,value}=e.target;
        setValue((state)=>{
            return{
                ...state,
                [name]:value
            }
        }) 
    }
    return(
        <Fragment>
            <p>{label}</p>
            <input 
            onChange={handleDateChange}
            type="date" 
            value={value} 
            className="outline-none px-2 py-2 w-full date" 
            name={name} 
            id={id} 
            required />
        </Fragment>
    )
}
export default DateInput;