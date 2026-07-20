import officeImage from "./images/office.jpg";

function App() {

  const office = {
    name: "DBS Business Center",
    rent: 55000,
    address: "Chennai"
  };

  const officeList = [
    {
      name: "DBS Business Center",
      rent: 55000,
      address: "Chennai"
    },
    {
      name: "Regus Workspace",
      rent: 75000,
      address: "Bangalore"
    },
    {
      name: "WeWork",
      rent: 65000,
      address: "Hyderabad"
    },
    {
      name: "Smart Office",
      rent: 45000,
      address: "Pune"
    }
  ];

  return (

    <div
      style={{
        fontFamily: "Arial",
        padding: "30px",
        backgroundColor: "#f4f7fc"
      }}
    >

      <h1
        style={{
          textAlign: "center",
          color: "#1565c0"
        }}
      >
        Office Space Rental App
      </h1>

      <img
        src={officeImage}
        alt="Office"
        width="500"
        style={{
          display: "block",
          margin: "20px auto",
          borderRadius: "10px",
          boxShadow: "0 4px 12px gray"
        }}
      />

      <h2>Featured Office</h2>

      <div
        style={{
          border: "1px solid gray",
          padding: "15px",
          borderRadius: "10px",
          background: "white",
          marginBottom: "30px"
        }}
      >

        <h3>{office.name}</h3>

        <p>

          <strong>Rent:</strong>

          <span
            style={{
              color: office.rent < 60000 ? "red" : "green"
            }}
          >
            ₹{office.rent}
          </span>

        </p>

        <p>

          <strong>Address:</strong> {office.address}

        </p>

      </div>

      <h2>Available Office Spaces</h2>

      {

        officeList.map((item, index) => (

          <div
            key={index}
            style={{
              background: "white",
              marginBottom: "20px",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px lightgray"
            }}
          >

            <h3>{item.name}</h3>

            <p>

              <strong>Rent:</strong>

              <span
                style={{
                  color: item.rent < 60000 ? "red" : "green"
                }}
              >
                ₹{item.rent}
              </span>

            </p>

            <p>

              <strong>Address:</strong> {item.address}

            </p>

          </div>

        ))

      }

    </div>

  );

}

export default App;