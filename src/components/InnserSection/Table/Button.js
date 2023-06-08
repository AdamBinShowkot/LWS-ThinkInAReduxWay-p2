import { Fragment } from "react"


const TableButton=({handleRemove,children})=>{
    return(
        <Fragment>
            <button onClick={handleRemove} className="lws-remove">
                {children}
            </button>
        </Fragment>
    )
}
export default TableButton;