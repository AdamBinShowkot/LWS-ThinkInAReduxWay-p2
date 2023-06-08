import { Fragment } from "react"
import FormComponent from "./Form";
import TableComponent from "./Table";

const InnerSection=()=>{
    return(
        <Fragment>
            <section>
                <div className="mt-[160px] mx-4 md:mt-[160px] relative">
                    <FormComponent/>
                </div>
                <div className="table-container">
                    <TableComponent/>
                </div>
            </section>
        </Fragment>
    )
}
export default InnerSection;