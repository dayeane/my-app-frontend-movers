import {useState} from "react"

function Hotels({trip}) {
  const [hotels, setHotels] = useState(trip.hotels);


  function deleteId(id) {
    fetch(`http://localhost:9292/trips/${trip.id}/hotels/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json"  }
    }).then((r) => r.json())
      .then((data) => setHotels(data));
  }


  if (hotels.length == 0) {
    return (<h1>No Hotels found</h1>)
  }

  return(
    <>
       <div className="card mt-5">
        <div className="card-header font-weight-bold">
          <h4>Hotels</h4>
          {/* <button className="btn btn-black">Create</button> */}
        </div>
        
        <div className="card-body d-flex justify-content-around flex-wrap5">
          {hotels.map( (hotel, index) => {
            return(
              <div  className="card text-white bg-info mb-3" key={hotel.id}>
                <div className="card-header d-flex justify-content-between">
                  <h5>Hotel {index + 1} </h5>
                  <div onClick={() => deleteId(hotel.id)} className="btn btn-danger">X</div>
                </div>
                <div className="card-body">
                  <p><span className="font-weight-bold">Check in:</span> {hotel.check_in}</p>
                  <p><span className="font-weight-bold">Check out:</span> {hotel.check_out}</p>
                  <p><span className="font-weight-bold">Location:</span> {hotel.location}</p>
                  <p><span className="font-weight-bold">Cost:</span> {hotel.cost.amount}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Hotels;