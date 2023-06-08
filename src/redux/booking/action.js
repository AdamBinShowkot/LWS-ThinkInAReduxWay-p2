import { 
    ADD_NEW_BOOKING,
    REMOVE_BOOKING 
} from "./actionType";

export const addNewBooking=(bookingData)=>{
    return{
        type:ADD_NEW_BOOKING,
        payload:bookingData
    }
}
export const removeBooking=(bookingIndex)=>{
    return{
        type:REMOVE_BOOKING,
        payload:bookingIndex
    }
}