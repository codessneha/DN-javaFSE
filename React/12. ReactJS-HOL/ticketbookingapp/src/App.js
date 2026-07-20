import { useState } from "react";

import Guest from "./Components/Guest";
import User from "./Components/User";

import "./App.css";

function App(){

    const [loggedIn,setLoggedIn]=useState(false);

    return(

        <div className="container">

            <h1>Ticket Booking Application</h1>

            {

                loggedIn ?

                <>

                    <button
                    onClick={()=>setLoggedIn(false)}
                    >
                        Logout
                    </button>

                    <User/>

                </>

                :

                <>

                    <button
                    onClick={()=>setLoggedIn(true)}
                    >
                        Login
                    </button>

                    <Guest/>

                </>

            }

        </div>

    );

}

export default App;