import { 
    ADD_NEW_BOOKING,
    REMOVE_BOOKING 
} from "./actionType";

const initialState={
    bookings:[]
}

const bookingReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_NEW_BOOKING:
            return{
                ...state,
                bookings:[...state.bookings,action.payload]
            }
        case REMOVE_BOOKING:
            const bookings=[...state.bookings];
            bookings.splice(action.payload,1);
            return{
                ...state,
                bookings:bookings
            }
        default:
            return state
    }
}
export default bookingReducer;