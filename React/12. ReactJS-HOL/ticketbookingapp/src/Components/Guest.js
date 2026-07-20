import FlightDetails from "./FlightDetails";

function Guest(){

    return(

        <div className="card">

            <h2>Welcome Guest</h2>

            <p>You can browse flight details.</p>

            <FlightDetails/>

            <h3>Please Login to Book Tickets.</h3>

        </div>

    );

}

export default Guest;