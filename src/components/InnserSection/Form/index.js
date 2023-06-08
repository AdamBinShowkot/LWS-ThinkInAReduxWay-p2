import { Fragment, useEffect, useState } from "react"
import Frame from '../../../assets/img/icons/Frame.svg';
import VectorOne from '../../../assets/img/icons/Vector (1).svg';
import VectorTwo from '../../../assets/img/icons/Vector (2).svg';
import VectorThree from '../../../assets/img/icons/Vector (3).svg';
import SelectInput from "./InputFields/SelectInput";
import DateInput from "./InputFields/DateInput";
import AddButton from "./Button";
import { 
    useDispatch 
} from "react-redux";
import { 
    addNewBooking 
} from "../../../redux/booking/action";

const destinationLists=[
    {
        id:1,
        label:"Dhaka",
        value:"Dhaka"
    },
    {
        id:2,
        label:"Sylhet",
        value:"Sylhet"
    },
    {
        id:3,
        label:"Saidpur",
        value:"Saidpur"
    },
    {
        id:4,
        label:"Cox's Bazar",
        value:"Cox's Bazar"
    },
]
const guestLists=[
    {
        id:1,
        label:"1 Person",
        value:1
    },
    {
        id:2,
        label:"2 Persons",
        value:2
    },
    {
        id:3,
        label:"3 Persons",
        value:3
    },
    {
        id:4,
        label:"4 Persons",
        value:4
    }
]
const businessLists=[
    {
        id:1,
        label:"Business",
        value:"Business"
    },
    {
        id:2,
        label:"Economy",
        value:"Economy"
    }
]
const FormComponent=()=>{
    const dispatch=useDispatch();
    const [id,setId]=useState(1);
    const [flightData,setFlightData]=useState({
        from:"",
        to:"",
        guests:"",
        date:"",
        ticketClass:""
    });

    const handleAddNewFlight=(e)=>{
        e.preventDefault();
        let flighData={...flightData};
        const flightDate=new Date(flighData.date);
        let month=flightDate.getMonth()+1;
        let myDate=flightDate.getDate()+"-"+(month>=10?month:"0"+month)+"-"+flightDate.getFullYear();
        const flightObj={
            id:id,
            from:flighData.from,
            to:flighData.to,
            guests:flighData.guests,
            date:myDate,
            ticketClass:flighData.ticketClass
        }
        dispatch(addNewBooking(flightObj));
        setFlightData({
            from:"",
            to:"",
            guests:"",
            date:"",
            ticketClass:""
        });
        setId((state)=>state+1);
    }
    return(
        <Fragment>
            <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
                <form onSubmit={handleAddNewFlight} className="first-hero lws-inputform">
                    <div className="des-from">
                        <SelectInput
                        label="Destination From"
                        value={flightData.from}
                        setValue={setFlightData}
                        Icon={Frame}
                        selectLists={destinationLists}
                        name="from"
                        id="lws-from"
                        />
                    </div>
                    <div className="des-from">
                        <SelectInput
                        label="Destination To"
                        value={flightData.to}
                        setValue={setFlightData}
                        Icon={Frame}
                        selectLists={destinationLists}
                        name="to"
                        id="lws-to"
                        />
                    </div>

                    <div className="des-from">
                        <DateInput
                        label="Journey Date"
                        id="lws-date"
                        name="date"
                        value={flightData.date}
                        setValue={setFlightData}
                        />
                    </div>
                    <div className="des-from">
                        <SelectInput
                        label="Guests"
                        value={flightData.guests}
                        setValue={setFlightData}
                        Icon={VectorOne}
                        selectLists={guestLists}
                        name="guests"
                        id="lws-guests"
                        />
                    </div>

                    <div className="des-from !border-r-0">
                        <SelectInput
                        label="className"
                        value={flightData.ticketClass}
                        setValue={setFlightData}
                        Icon={VectorThree}
                        selectLists={businessLists}
                        name="ticketClass"
                        id="lws-ticketClass"
                        />
                    </div>

                    <AddButton>
                        <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <span className="text-sm">Book</span>
                    </AddButton>
                  
                </form>
            </div>
        </Fragment>
    )
}
export default FormComponent;