import { Fragment } from "react"

const SelectInput=({value,setValue,selectLists,Icon,label,name,id})=>{
    const handleSelectOnChange=(e)=>{
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
            <div className="flex flex-row">
                <img src={Icon} alt="" />
                <select 
                className="outline-none px-2 py-2 w-full"
                value={value} 
                name={name} 
                id={id} 
                onChange={handleSelectOnChange}
                required>
                    <option value="" hidden>Please Select</option>
                    {
                        selectLists.length?selectLists.map((sData)=><option  key={sData.id} value={sData.value}>{sData.label}</option>):""
                    }
                </select>
            </div>
        </Fragment>
    )
}
export default SelectInput;