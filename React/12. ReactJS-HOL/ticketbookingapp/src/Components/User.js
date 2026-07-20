import FlightDetails from "./FlightDetails";

function User(){

    return(

        <div className="card">

            <h2>Welcome User</h2>

            <p>You can book tickets.</p>

            <FlightDetails/>

            <button>
                Book Ticket
            </button>

        </div>

    );

}

export default User;