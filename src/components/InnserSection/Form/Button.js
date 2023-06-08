import { Fragment } from "react"
import { useSelector } from "react-redux";

const FormButton=({children})=>{
  const bookingLists=useSelector((state)=>state.booking.bookings);
  const length=bookingLists.length;
  return(
      <Fragment>
            <button 
            className="addCity" 
            type="submit" 
            id="lws-addCity"
            disabled={length>=3?true:false}
            >
              {length>=3?<span>🚫</span>:<>{children}</>}
            </button>
      </Fragment>
  )
}
export default FormButton;